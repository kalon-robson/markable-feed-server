import type { CookieOptions, Request, Response } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
import type { User } from '../../../../databases/maindb/client/index.js';
import { ActivityLogActionType, ActivityLogEntityType, UserStatus } from '../../../../databases/maindb/client/index.js';
import { maindb } from '../../../prisma/maindb/index.js';
import type { EndpointHandler } from '../../../lib/types.js';
import { createActivityLog } from '../../../lib/activityLog/index.js';
import type { LoginInput } from './types.js';
import type { Viewer } from '../getViewer/types.js';

const cookieOptions: CookieOptions = {
	domain: new URL(process.env.CLIENT_URL as string).hostname,
	httpOnly: true,
	maxAge: 1000 * 60 * 60 * 24 * 365,
	secure: true,
	signed: true,
};

const loginViaCookie = async (req: Request, res: Response): Promise<User & { token: string } | null> => {
	let user;

	if (req.signedCookies.viewer) {
		user = await maindb.user.findFirst({
			where: {
				deletedAt: null,
				id: req.signedCookies.viewer,
			},
		});
	}

	if (!user) {
		res.clearCookie('viewer');
		return null;
	}

	const token = crypto.randomBytes(32).toString('hex');

	const updatedUser = await maindb.user.update({
		data: {
			lastLoginAttempt: new Date(),
			sessions: {
				create: {
					expiresAt: dayjs().add(30, 'day').toDate(),
					ipAddress: req.ip,
					token,
					userAgent: req.get('User-Agent') ?? '',
				},
			},
		},
		where: {
			id: req.signedCookies.viewer,
		},
	});

	return {
		...updatedUser,
		token,
	};
};

const loginViaEmail = async ({ req, res, email, password }: { req: Request, res: Response, email: string, password: string }): Promise<User & { token: string } | null> => {
	try {
		const user = await maindb.user.findFirst({
			where: {
				email,
				status: UserStatus.ACTIVE,
			},
		});

		if (!user) {
			throw new Error('Invalid credentials');
		}

		if (user.failedLoginAttempts >= 5 && dayjs(user.lastLoginAttempt).isAfter(dayjs().subtract(15, 'minutes'))) {
			throw new Error('Too many login attemps. Please try again later');
		}

		if (!user.password || !await bcrypt.compare(password, user.password)) {
			res.clearCookie('viewer');
			await maindb.user.update({
				data: {
					failedLoginAttempts: {
						increment: 1,
					},
				},
				where: {
					id: user.id,
				},
			});
			throw new Error('Invalid credentials');
		}

		const token = crypto.randomBytes(32).toString('hex');

		const updatedUser = await maindb.user.update({
			data: {
				failedLoginAttempts: 0,
				lastLoginAttempt: new Date(),
				sessions: {
					create: {
						expiresAt: dayjs().add(30, 'days').toDate(),
						ipAddress: req.ip,
						token,
						userAgent: req.get('User-Agent') ?? '',
					},
				},
			},
			where: {
				id: user.id,
			},
		});

		res.cookie('viewer', updatedUser.id, cookieOptions);

		return {
			...updatedUser,
			token,
		};
	} catch (err) {
		throw new Error(`Error in loginViaEmail: ${err}`);
	}
};

export const login: EndpointHandler<LoginInput, Viewer> = async ({ email, password }, req, res) => {
	try {
		let user: User & { token: string } | null;

		if (!email || !password) {
			user = await loginViaCookie(req, res);
		} else {
			user = await loginViaEmail({ req, res, email, password });
		}

		if (!user) {
			res.clearCookie('viewer');
			return {
				didRequest: true,
			};
		}

		await createActivityLog({
			action: ActivityLogActionType.READ,
			entityType: ActivityLogEntityType.USER,
			entityId: user.id,
			description: `User logged in via ${(!email || !password) ? 'cookie' : 'email and password'}`,
			userId: user.id,
		});

		return {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			token: user.token,
			didRequest: true,
		};
	} catch (err) {
		throw new Error(`Failed to login: ${err}`);
	}
};

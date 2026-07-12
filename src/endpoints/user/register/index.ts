import type { CookieOptions } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
import {
	ActivityLogActionType,
	ActivityLogEntityType,
	UserRole,
	UserStatus,
} from '../../../../databases/maindb/client/index.js';
import { maindb } from '../../../prisma/maindb/index.js';
import type { EndpointHandler } from '../../../lib/types.js';
import { createActivityLog } from '../../../lib/activityLog/index.js';
import type { RegisterInput } from './types.js';
import type { Viewer } from '../../auth/getViewer/types.js';

const cookieOptions: CookieOptions = {
	domain: new URL(process.env.CLIENT_URL as string).hostname,
	httpOnly: true,
	maxAge: 1000 * 60 * 60 * 24 * 365,
	secure: true,
	signed: true,
};

export const register: EndpointHandler<RegisterInput, Viewer> = async ({
	firstName,
	lastName,
	email,
	password,
}, req, res) => {
	try {
		if (!firstName || !lastName || !email || !password) {
			throw new Error('Missing required registration fields');
		}

		const normalizedEmail = email.toLowerCase().trim();
		const existingUser = await maindb.user.findFirst({
			where: {
				email: normalizedEmail,
				deletedAt: null,
			},
		});

		if (existingUser) {
			throw new Error('Email already in use');
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const token = crypto.randomBytes(32).toString('hex');

		const user = await maindb.user.create({
			data: {
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				email: normalizedEmail,
				password: hashedPassword,
				status: UserStatus.ACTIVE,
				role: UserRole.USER,
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
		});

		res.cookie('viewer', user.id, cookieOptions);

		await createActivityLog({
			action: ActivityLogActionType.CREATE,
			entityType: ActivityLogEntityType.USER,
			entityId: user.id,
			description: 'User registered',
			userId: user.id,
		});

		return {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			token,
			didRequest: true,
		};
	} catch (err) {
		throw new Error(`Failed to register: ${err}`);
	}
};

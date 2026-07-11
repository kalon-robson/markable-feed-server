import type { Request } from 'express';
import type { User } from '../../../databases/maindb/client/index.js';
import { UserStatus } from '../../../databases/maindb/client/index.js';
import { maindb } from '../../prisma/maindb/index.js';

export const authorize = async (req: Request): Promise<Omit<User, 'password'> | null> => {
	const token = req.get('X-CSRF-TOKEN');

	if (!token) {
		return null;
	}

	const viewer = await maindb.user.findFirst({
		where: {
			sessions: {
				some: {
					expiresAt: {
						gte: new Date(),
					},
					token,
				},
			},
			status: UserStatus.ACTIVE,
		},
	});

	return viewer;
};

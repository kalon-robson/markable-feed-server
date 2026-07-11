import { UserRole, UserStatus } from '../../../databases/maindb/client/index.js';
import { logger } from '../../lib/logger/index.js';
import { maindb } from '../../prisma/maindb/index.js';
import users from './users.json' with {type: 'json'};


export const seedUsers = async (): Promise<void> => {
	logger.info('Seeding users...');


	await Promise.all(users.map(async (user) => {
		await maindb.user.create({
			data: {
				...user,
				status: UserStatus.ACTIVE,
				role: UserRole.USER,
			},
		});
	}));

	logger.info('Seeding users...Done');
};

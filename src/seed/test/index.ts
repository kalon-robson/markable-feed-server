import { logger } from '../../lib/logger/index.js';
import { maindb } from '../../prisma/maindb/index.js';

export const seedTest = async (): Promise<void> => {
	await maindb.test.create({
		data: {
			text: 'Hello World',
		},
	});

	logger.info('Test seeded successfully');
};

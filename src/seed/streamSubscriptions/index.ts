import dayjs from 'dayjs';
import { logger } from '../../lib/logger/index.js';
import { maindb } from '../../prisma/maindb/index.js';

export const seedStreamSubscriptions = async (): Promise<void> => {
	logger.info('Seeding stream subscriptions...');

	const [users, streams] = await Promise.all([
		maindb.user.findMany({
			select: { id: true },
		}),
		maindb.stream.findMany({
			take: 4,
			select: { id: true, price: true, availability: true },
			orderBy: { createdAt: 'asc' },
		}),
	]);

	if (streams.length === 0) {
		logger.warn('No streams found — skipping stream subscription seed');
		return;
	}

	await Promise.all(
		users.flatMap((user) => streams.map((stream, index) => maindb.streamSubscription.create({
			data: {
				userId: user.id,
				streamId: stream.id,
				price: stream.price,
				selectedDays: stream.availability.slice(0, 3),
				startDate: dayjs().add(index, 'day').toDate(),
			},
		}))),
	);

	logger.info('Seeding stream subscriptions...Done');
};

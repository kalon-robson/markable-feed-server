import { logger } from '../../lib/logger/index.js';
import { maindb } from '../../prisma/maindb/index.js';
import { StreamTag, type Prisma } from '../../../databases/maindb/client/index.js';
import data from './data.json' with {type: 'json'};

type SeedStream = Omit<Prisma.StreamCreateManyInput, 'tags'> & {
	tags: string[];
};

export const seedStreams = async (): Promise<void> => {
	logger.info('Seeding streams...');

	const streamData: Prisma.StreamCreateManyInput[] = (data as SeedStream[]).map((stream) => ({
		...stream,
		tags: stream.tags.map((tag) => {
			if (tag !== StreamTag.NEWS) {
				throw new Error(`Invalid stream tag: ${tag}`);
			}

			return tag;
		}),
	}));

	await maindb.stream.createMany({
		data: streamData,
	});

	logger.info('Seeding streams...Done');
};

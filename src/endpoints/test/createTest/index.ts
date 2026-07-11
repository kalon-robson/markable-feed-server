import type { EndpointHandler } from '../../../lib/types.js';
import { maindb } from '../../../prisma/maindb/index.js';
import { type CreateTestInput } from './types.js';
import type { Test } from '../../../../databases/maindb/client/index.js';

type Props = CreateTestInput

export const createTest: EndpointHandler<Props, Test> = async ({ input }: Props): Promise<Test> => {
	const item = await maindb.test.create({
		data: {
			text: input.text,
		},
	});

	return item;
};

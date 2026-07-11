import type { Test } from '../../../../databases/maindb/client/index.js';
import { maindb } from '../../../prisma/maindb/index.js';
import { type EndpointHandler } from '../../../lib/types.js';
import { type GetTestInput } from './types.js';

type Props = GetTestInput

export const getTest: EndpointHandler<Props, Test> = async ({
	id,
}) => {
	const record = await maindb.test.findUnique({
		where: {
			id,
		},
	});

	if (!record) {
		throw new Error('test not found');
	}

	return record;
};

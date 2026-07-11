import type { Test } from '../../../../databases/maindb/client/index.js';
import type { EndpointHandler } from '../../../lib/types.js';
import { maindb } from '../../../prisma/maindb/index.js';
import { type UpdateTestInput } from './types.js';

type Props = UpdateTestInput


export const updateTest: EndpointHandler<Props, Test> = async ({ id, input }) => {
	const item = await maindb.test.update({
		where: {
			id,
		},
		data: {
			text: input.text,
		},
	});

	return item;
};

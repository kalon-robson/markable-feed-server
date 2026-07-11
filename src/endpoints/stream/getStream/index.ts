import type { Stream } from '../../../../databases/maindb/client/index.js';
import { maindb } from '../../../prisma/maindb/index.js';
import { type EndpointHandler } from '../../../lib/types.js';
import { type GetStreamInput } from './types.js';

type Props = GetStreamInput

export const getStream: EndpointHandler<Props, Stream> = async ({
	id,
}) => {
	const record = await maindb.stream.findUnique({
		where: {
			id,
		},
	});

	if (!record) {
		throw new Error('stream not found');
	}

	return record;
};

import type { Stream } from '../../../../databases/maindb/client/index.js';
import { maindb } from '../../../prisma/maindb/index.js';
import { DB_RECORDS_DEFAULT_LIMIT, DB_RECORDS_MAX_LIMIT } from '../../../lib/constants.js';
import { convertQuerySortToPrismaOrderBy } from '../../../utils/convertQuerySortToPrismaOrderBy/index.js';
import { type EndpointHandler, type PaginatedDocs, type QueryParams } from '../../../lib/types.js';
import { sanitizeWhitelistedWhere } from '../../../utils/sanitizeWhitelistedWhere/index.js';
import { sanitizeWhitelistedSelect } from '../../../utils/sanitizeWhitelistedSelect/index.js';

type Props = QueryParams

export const getStreams: EndpointHandler<Props, PaginatedDocs<Stream>> = async ({
	limit,
	offset,
	select,
	sortBy,
	where,
}) => {
	const total = await maindb.stream.count({
		where: sanitizeWhitelistedWhere(where, {}),
	});

	const items = await maindb.stream.findMany({
		where: sanitizeWhitelistedWhere(where, {}),
		skip: offset,
		take: Math.min(limit || DB_RECORDS_DEFAULT_LIMIT, DB_RECORDS_MAX_LIMIT),
		orderBy: convertQuerySortToPrismaOrderBy(sortBy),
		select: sanitizeWhitelistedSelect(select, {}),
	});

	return {
		items,
		total,
	};
};

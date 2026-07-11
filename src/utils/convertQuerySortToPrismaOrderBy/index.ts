import type { QueryParams } from '../../lib/types.js';

export const convertQuerySortToPrismaOrderBy = (sortBy: QueryParams['sortBy']): Record<string, 'asc' | 'desc'> => {
	if (!sortBy) {
		return { createdAt: 'desc' };
	}

	const sortArray = Array.isArray(sortBy) ? sortBy : sortBy.split(',');
	const orderBy: {
		[key: string]: 'asc' | 'desc';
	}[] = sortArray.map((sort: string) => {
		switch (true) {
			case sort.startsWith('+'):
				return { [sort.slice(1)]: 'asc' };
			case sort.startsWith('-'):
				return { [sort.slice(1)]: 'desc' };
			default:
				return { [sort]: 'asc' };
		}
	});

	return orderBy.reduce((acc, curr) => {
		const key = Object.keys(curr)[0];
		const value = curr[key];
		acc[key] = value;
		return acc;
	}, {});
};

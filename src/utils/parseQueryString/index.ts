import type { Request } from 'express';
import type { QueryParams } from '../../lib/types.js';
// Use Request['query'] as the type for query objects
type ReqQuery = Request['query'];

const unflattenBracketKeys = (obj: Record<string, unknown>): Record<string, unknown> => {
	const result: Record<string, unknown> = {};

	Object.entries(obj).forEach(([flatKey, value]) => {
		const keys = flatKey.split(/\[|\]/g).filter(Boolean);

		if (keys.length <= 1) {
			result[flatKey] = value;
			return;
		}

		let current = result;
		keys.forEach((key, index) => {
			if (index === keys.length - 1) {
				current[key] = value;
				return;
			}

			if (!current[key] || typeof current[key] !== 'object' || Array.isArray(current[key])) {
				current[key] = {};
			}

			current = current[key] as Record<string, unknown>;
		});
	});

	return result;
};

export const parseQueryParams = (query: ReqQuery): QueryParams => {
	const queryObject = (query && typeof query === 'object' ? query : {}) as Record<string, unknown>;
	return unflattenBracketKeys(queryObject) as QueryParams;
};

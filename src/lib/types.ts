import type { Request, Response } from 'express';

export type WhereFieldMode = 'default' | 'insensitive';

export const validOperators = [
	'equals',
	'contains',
	'not',
	'not_equals',
	'in',
	'not_in',
	'exists',
	'gt',
	'gte',
	'lt',
	'lte',
] as const;

export type Operator = (typeof validOperators)[number];

export type JsonValue = unknown;
export type JsonArray = unknown[];

export type WhereField = Partial<Record<Operator, JsonValue>>;
export type Where = Record<string, WhereField | Where[]>;

export type SelectIncludeType = { [key: string]: true | SelectIncludeType };
export type SelectWhitelistType = { [key: string]: true | 'ignoreScalar' | SelectWhitelistType };

// Non-recursive version for OpenAPI docs
export type SelectIncludeTypeFlat = Record<string, true>;

export type QueryParams = {
	limit?: number;
	offset?: number;
	sortBy?: string;
	where?: Where;
	select?: SelectIncludeTypeFlat;
	cursor?: { id: unknown };
};

export type PaginatedDocs<T> = {
	total: number;
	items: T[];
};

export type EndpointHandler<T, R> = (
	data: T,
	req: Request,
	res: Response
) => Promise<R> | void;

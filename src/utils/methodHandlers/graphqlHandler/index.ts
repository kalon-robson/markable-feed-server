import type { Request, Response } from 'express';
import type { GraphQLResolveInfo } from 'graphql';
import type { EndpointHandler } from '../../../lib/types.js';
import { getPrismaSelectFromInfo } from '../parsePrismaSelectFromInfo/index.js';


export const graphqlHandler = <T, R>(getFn: EndpointHandler<T, R>) => async (_: unknown, args: unknown, context: { req: Request; res: Response }, info?: GraphQLResolveInfo): Promise<R | void> => {
	const req = context?.req;
	const res = context?.res;

	let result;

	if (info?.operation.operation === 'query') {
		const select = info ? getPrismaSelectFromInfo(info) : undefined;
		const parsedArgs = typeof args === 'object' && args !== null
			? args as Record<string, unknown>
			: {};

		const params = {
			...parsedArgs,
			cursor: parsedArgs.cursor,
			select,
		};

		result = getFn(params as T, req, res);
	} else {
		result = getFn(args as T, req, res);
	}

	return result;
};

import merge from 'lodash.merge';
import { authResolvers } from '../endpoints/auth/index.js';
import { streamResolvers } from '../endpoints/stream/index.js';
import { testResolvers } from '../endpoints/test/index.js';

export const resolvers = merge(
	{},
	authResolvers,
	streamResolvers,
	testResolvers,
);

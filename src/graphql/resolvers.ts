import merge from 'lodash.merge';
import { testResolvers } from '../endpoints/test/index.js';

export const resolvers = merge(
	{},
	testResolvers,
);

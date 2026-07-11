import { Router } from 'express';
import type { IResolvers } from '@graphql-tools/utils';
import { getTests } from './getTests/index.js';
import { createTest } from './createTest/index.js';
import { updateTest } from './updateTest/index.js';
import { deleteTest } from './deleteTest/index.js';
import { getTest } from './getTest/index.js';
import { restHandler } from '../../utils/methodHandlers/restHandler/index.js';
import { graphqlHandler } from '../../utils/methodHandlers/graphqlHandler/index.js';

export const testsRouter = (): Router => {
	const router = Router();

	router.get('/get-tests', restHandler(getTests));
	router.get('/get-test', restHandler(getTest));
	router.post('/create-test', restHandler(createTest));
	router.put('/update-test', restHandler(updateTest));
	router.delete('/delete-test', restHandler(deleteTest));

	return router;
};

export const testResolvers: IResolvers = {
	Query: {
		tests: graphqlHandler(getTests),
		test: graphqlHandler(getTest),
	},
	Mutation: {
		createTest: graphqlHandler(createTest),
		updateTest: graphqlHandler(updateTest),
		deleteTest: graphqlHandler(deleteTest),
	},
};

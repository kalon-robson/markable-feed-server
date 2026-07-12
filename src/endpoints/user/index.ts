import { Router } from 'express';
import type { IResolvers } from '@graphql-tools/utils';
import { restHandler } from '../../utils/methodHandlers/restHandler/index.js';
import { graphqlHandler } from '../../utils/methodHandlers/graphqlHandler/index.js';
import { register } from './register/index.js';

export const usersRouter = (): Router => {
	const router = Router();

	router.post('/register', restHandler(register));

	return router;
};

export const userResolvers: IResolvers = {
	Mutation: {
		register: graphqlHandler(register),
	},
};

import { Router } from 'express';
import type { IResolvers } from '@graphql-tools/utils';
import { restHandler } from '../../utils/methodHandlers/restHandler/index.js';
import { getViewer } from './getViewer/index.js';
import { login } from './login/index.js';
import { logout } from './logout/index.js';
import { graphqlHandler } from '../../utils/methodHandlers/graphqlHandler/index.js';

export const authRouter = (): Router => {
	const router = Router();

	router.get('/get-viewer', restHandler(getViewer));
	router.post('/login', restHandler(login));
	router.post('/logout', restHandler(logout));

	return router;
};

export const authResolvers: IResolvers = {
	Query: {
		viewer: graphqlHandler(getViewer),
	},
	Mutation: {
		login: graphqlHandler(login),
		logout: graphqlHandler(logout),
	},
};

import { Router } from 'express';
import type { IResolvers } from '@graphql-tools/utils';
import { getStreams } from './getStreams/index.js';
import { getStream } from './getStream/index.js';
import { restHandler } from '../../utils/methodHandlers/restHandler/index.js';
import { graphqlHandler } from '../../utils/methodHandlers/graphqlHandler/index.js';

export const streamsRouter = (): Router => {
	const router = Router();

	router.get('/get-streams', restHandler(getStreams));
	router.get('/get-stream', restHandler(getStream));

	return router;
};

export const streamResolvers: IResolvers = {
	Query: {
		streams: graphqlHandler(getStreams),
		stream: graphqlHandler(getStream),
	},
};

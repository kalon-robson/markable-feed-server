import { createServer } from 'http';
import { config as dotenv } from 'dotenv';
import type { Application } from 'express';
import express from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import type { ExpressContextFunctionArgument } from '@as-integrations/express5';
import { expressMiddleware } from '@as-integrations/express5';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from '@apollo/server';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import swaggerUi from 'swagger-ui-express';
import { logger } from './lib/logger/index.js';
import { resolvers } from './graphql/resolvers.js';
import { typeDefs } from './graphql/typeDefs.js';
import { endpointsRouter } from './endpoints/index.js';

dotenv();

const isDev = process.env.NODE_ENV === 'development';

const mount = async (app: Application): Promise<void> => {
	try {
		const schema = makeExecutableSchema({
			resolvers,
			typeDefs,
		});

		const httpServer = createServer(app);

		const corsOrigin = isDev ? [`${process.env.CLIENT_URL}`, 'https://studio.apollographql.com'] : process.env.CLIENT_URL;
		app.use(cookieParser(process.env.SECRET));
		app.use(express.json({ limit: '10mb' }));
		app.use(cors({
			credentials: true,
			origin: corsOrigin,
		}));
		app.use(helmet({
			contentSecurityPolicy: isDev ? false : undefined,
		}));

		const server = new ApolloServer({
			plugins: [
				ApolloServerPluginDrainHttpServer({ httpServer }),
			],
			schema,
		});

		await server.start();

		app.use('/api', endpointsRouter());

		app.use(
			'/api/graphql',
			expressMiddleware(server, {
				context: async ({ req, res }: ExpressContextFunctionArgument) => ({ req, res }),
			}),
		);

		const __dirname = dirname(fileURLToPath(import.meta.url));
		const openApiDoc = JSON.parse(readFileSync(join(__dirname, 'openapi.json'), 'utf-8')) as object;
		app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(openApiDoc));

		httpServer.listen(process.env.PORT, () => {
			logger.info(`Server is running on port ${process.env.PORT}`);
		});
	} catch (err) {
		logger.error(String(err));
	}
};

mount(express()).catch((err) => logger.error(String(err)));

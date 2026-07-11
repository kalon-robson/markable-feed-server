import type { Request, Response, NextFunction } from 'express';
import { fileURLToPath } from 'url';
import { Router } from 'express';
import path from 'path';
import { testsRouter } from './test/index.js';
import swaggerRouter from '../routes/swagger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const endpointsRouter = (): Router => {
	const router = Router();

	router.use('/', swaggerRouter);
	router.use('/openapi.json', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../openapi.json'));
	});


	if (process.env.NODE_ENV !== 'production') {
		router.use('/tests', testsRouter());
	}

	router.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
		res.status(500).json({
			error: {
				// eslint-disable-next-line no-nested-ternary
				message: typeof err === 'string'
					? err
					: err instanceof Error
						? err.message
						: 'Internal Server Error',
			},
		});
	});

	return router;
};

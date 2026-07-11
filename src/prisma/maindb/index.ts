import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';
import { PrismaClient as MainDBPrismaClient } from '../../../databases/maindb/client/index.js';

dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.MAIN_DATABASE_URL });
export const maindb = new MainDBPrismaClient({
	adapter,
	errorFormat: 'minimal',
	log: [
		{ emit: 'event', level: 'query' },
		{ emit: 'event', level: 'info' },
		{ emit: 'event', level: 'warn' },
	],
});

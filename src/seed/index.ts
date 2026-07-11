import { seedTest } from './test/index.js';
import { seedStreams } from './stream/index.js';
import { seedUsers } from './users/index.js';

export const seed = async (): Promise<void> => {
	await seedTest();
	await seedStreams();
	await seedUsers();
};

seed().catch((error) => {
	console.error('Error seeding the database:', error);
});

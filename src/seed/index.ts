import { seedTest } from './test/index.js';
import { seedStreams } from './stream/index.js';
import { seedUsers } from './users/index.js';
import { seedStreamSubscriptions } from './streamSubscriptions/index.js';

export const seed = async (): Promise<void> => {
	await seedTest();
	await seedStreams();
	await seedUsers();
	await seedStreamSubscriptions();
};

seed().catch((error) => {
	console.error('Error seeding the database:', error);
});

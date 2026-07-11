import { seedTest } from './test/index.js';
import { seedUsers } from './users/index.js';

export const seed = async (): Promise<void> => {
	await seedTest();
	await seedUsers();
};

seed().catch((error) => {
	console.error('Error seeding the database:', error);
});

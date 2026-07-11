import { seedTest } from './test/index.js';

export const seed = async (): Promise<void> => {
	await seedTest();
};

seed().catch((error) => {
	console.error('Error seeding the database:', error);
});

/* eslint-disable import/no-unresolved */
import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';
import graphqlPlugin from '@graphql-eslint/eslint-plugin';

export default [
	baseConfig,
	reactConfig,
	{
		files: ['**/*.{ts,tsx}'],
		...typescriptConfig,
	},
	{
		ignores: [
			'databases',
			'schema.graphql',
		],
	},
	{
		files: ['eslint.config.mjs'],
		languageOptions: {
			parserOptions: {
				project: null,
			},
		},
	},
	{
		files: ['prisma.config.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.prisma.json',
			},
		},
	},
	{
		files: ['graphql.config.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.graphql.json',
			},
		},
	},
	{
		files: ['**/*.graphql'],
		languageOptions: {
			parser: graphqlPlugin.parser,
		},
		ignores: [
			'**/node_modules/**',
			'src/graphql/schema.graphql',
			'src/graphql/typeDefs/**/*.graphql',
		],
		plugins: {
			'@graphql-eslint': graphqlPlugin,
		},
		rules: {
			'eol-last': 'warn',
			'@graphql-eslint/no-anonymous-operations': 'warn',
			'@graphql-eslint/naming-convention': [
				'warn',
				{
					OperationDefinition: {
						style: 'PascalCase',
						forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
						forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
					},
					ObjectTypeDefinition: {
						style: 'PascalCase',
					},
				},
			],
		},
	},
	{
		rules: {
			'import/extensions': 'off',
		},
	},
];

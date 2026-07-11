# GraphQL Server Boilerplate

This GraphQL server boilerplate provides a basic structure for building servers. It contains the essential dependencies and scripts to run and develop a GraphQL server using TypeScript, Apollo Server, Prisma, and other popular libraries. 

## Getting Started

1. Clone the repository: 

   ```bash
   git clone git@github.com:innovixx/graphql-server-boilerplate.git
   ```

2. Install the dependencies: 

   ```bash
   pnpm install
   ```

3. Start the development server: 

   ```bash
   pnpm dev
   ```

   This will start a development server at `http://localhost:3000/api` that you can use to test your GraphQL queries and mutations.

4. To build the production-ready server, run: 

   ```bash
   pnpm build
   ```

   This will compile the TypeScript code to JavaScript and output it to the `./dist` folder.

5. To start the production server, run: 

   ```bash
   pnpm serve
   ```

## Scripts

- `pnpm dev`: Starts the development server using `nodemon` and `tsx`.
- `pnpm build`: Compiles the TypeScript code to JavaScript using `tsc`.
- `pnpm serve`: Starts the production server using the compiled JavaScript code.
- `pnpm cleanDev`: Resets the database and seeds it with test data before starting the development server.
- `pnpm db:migrate:main`: Runs database migrations for the `maindb` schema using `npx prisma`.
- `pnpm db:migrate:main:prod`: Runs database migrations for the `maindb` schema in production using `npx prisma`.
- `pnpm db:reset`: Resets the database for the `maindb` schema using `npx prisma`.

## Considerations

 - Updating ESLint to version >= 10 causes incompatibility issues with eslint-react-plugin used under-the-hood by @innovixx/eslint-config. Version locked to the latest stable and compatible version.
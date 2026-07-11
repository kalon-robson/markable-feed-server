import { fileURLToPath } from 'url';
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';
import { print } from 'graphql';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '../**/index.graphql'));

const mergedTypeDefs = mergeTypeDefs(typesArray);
const sdl = print(mergedTypeDefs);

const outputPath = path.join(__dirname, 'schema.graphql');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sdl);

export const typeDefs = mergedTypeDefs;

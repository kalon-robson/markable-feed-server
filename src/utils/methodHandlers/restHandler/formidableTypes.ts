import type { Request } from 'express';

export interface FormidableFields {
	[key: string]: string | string[];
}

export interface FormidableFile {
	size: number;
	path: string;
	name?: string;
	type?: string;
	lastModifiedDate?: Date;
	hash?: string;
	toJSON?: () => object;
}

export interface FormidableFiles {
	[key: string]: FormidableFile | FormidableFile[];
}

export type FormidableRequest = Request & {
	fields?: FormidableFields;
	files?: FormidableFiles;
};

import type { Response, NextFunction, Request } from 'express';
import type { EndpointHandler } from '../../../lib/types.js';
import { parseQueryParams } from '../../parseQueryString/index.js';
import type { FormidableRequest } from './formidableTypes.js';

// Helper to unflatten bracket notation keys into nested objects
function unflatten(
	obj: Record<string, unknown>,
): Record<string, unknown> {
	const result: Record<string, unknown> = {};
	Object.entries(obj).forEach(([flatKey, value]) => {
		const keys = flatKey.split(/\[|\]/g).filter(Boolean);
		if (keys.length === 1) {
			result[keys[0]] = value;
		} else {
			let curr = result;
			keys.forEach((k, i) => {
				if (i === keys.length - 1) {
					curr[k] = value;
				} else {
					if (!curr[k] || typeof curr[k] !== 'object') curr[k] = {};
					curr = curr[k] as Record<string, unknown>;
				}
			});
		}
	});
	return result;
}

// Deep merge b into a (returns a new object, does not mutate)
function deepMerge(a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown> {
	const result = { ...a };
	Object.entries(b).forEach(([k, v]) => {
		if (
			result[k] && typeof result[k] === 'object'
			&& v && typeof v === 'object'
			&& !Array.isArray(result[k]) && !Array.isArray(v)
		) {
			result[k] = deepMerge(result[k] as Record<string, unknown>, v as Record<string, unknown>);
		} else {
			result[k] = v;
		}
	});
	return result;
}

export const restHandler = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Fn: EndpointHandler<any, any>,
) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		let result;
		const fReq = req as unknown as FormidableRequest;
		if (fReq.files || fReq.fields) {
			// Handle multipart/form-data (express-formidable)
			const parsedFields: Record<string, unknown> = {};
			Object.entries(fReq.fields || {}).forEach(([key, value]) => {
				if (typeof value === 'string') {
					try {
						parsedFields[key] = JSON.parse(value);
					} catch {
						parsedFields[key] = value;
					}
				} else {
					parsedFields[key] = value;
				}
			});
			const nestedFields = unflatten(parsedFields);
			const nestedFiles = unflatten(fReq.files || {});
			const data = deepMerge(nestedFields, nestedFiles);
			result = await Fn(data, req, res);
		} else if (req.body && Object.keys(req.body).length > 0) {
			// Handle application/json
			result = await Fn(req.body, req, res);
		} else {
			// Handle query params (GET, etc.)
			const params = parseQueryParams(req.query);
			result = await Fn(params, req, res);
		}

		res.status(200).json(result);
		next();
	} catch (error) {
		next(error);
	}
};

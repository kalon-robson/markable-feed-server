import type { SelectIncludeType, SelectWhitelistType } from '../../lib/types.js';

const isRecord = (value: unknown): value is Record<string, unknown> => (
	typeof value === 'object' && value !== null && !Array.isArray(value)
);

const isValidSelectLeaf = (value: unknown): value is true | Record<string, unknown> => (
	value === true || isRecord(value)
);

// Recursively coerces "true" strings to booleans and wraps nested objects in { select: ... }
// Used when whitelistValue === true (all nested fields are allowed without restriction)
const coerceSelectValues = (obj: Record<string, unknown>): Record<string, unknown> => {
	const result: Record<string, unknown> = {};
	Object.entries(obj).forEach(([key, rawValue]) => {
		const value = rawValue === 'true' ? true : rawValue;
		if (value === true) {
			result[key] = true;
		} else if (isRecord(value)) {
			const nested = isRecord(value.select) ? value.select : value;
			result[key] = { select: coerceSelectValues(nested) };
		}
	});
	return result;
};

type SelectValidationResult = {
	sanitizedSelect?: Record<string, unknown>;
	forbiddenPaths: string[];
};

const validateSelect = (
	requestedSelect: Record<string, unknown>,
	selectWhitelist: SelectWhitelistType,
	path: string[] = [],
): SelectValidationResult => {
	const sanitizedSelect: Record<string, unknown> = {};
	const forbiddenPaths: string[] = [];
	const isRootLevel = path.length === 0;

	Object.entries(requestedSelect).forEach(([key, rawValue]) => {
		const value = rawValue === 'true' ? true : rawValue;
		const nextPath = [...path, key];
		const whitelistValue = selectWhitelist[key];

		if (whitelistValue === 'ignoreScalar') {
			return;
		}

		if (!isValidSelectLeaf(value)) {
			forbiddenPaths.push(nextPath.join('.'));
			return;
		}

		if (value === true) {
			if (isRootLevel || whitelistValue === true) {
				sanitizedSelect[key] = true;
			} else {
				forbiddenPaths.push(nextPath.join('.'));
			}
			return;
		}

		if (whitelistValue === true) {
			const nested = isRecord(value.select) ? value.select : value;
			sanitizedSelect[key] = { select: coerceSelectValues(nested) };
			return;
		}

		if (!whitelistValue) {
			forbiddenPaths.push(nextPath.join('.'));
			return;
		}

		const nestedRequestedSelect = isRecord(value.select)
			? value.select
			: value;
		const nestedResult = validateSelect(nestedRequestedSelect, whitelistValue, nextPath);
		forbiddenPaths.push(...nestedResult.forbiddenPaths);

		if (!nestedResult.sanitizedSelect) return;

		sanitizedSelect[key] = { select: nestedResult.sanitizedSelect };
	});

	return {
		sanitizedSelect: Object.keys(sanitizedSelect).length > 0 ? sanitizedSelect : undefined,
		forbiddenPaths,
	};
};

export const sanitizeWhitelistedSelect = (
	select: SelectIncludeType | undefined,
	whitelist: SelectWhitelistType,
): SelectIncludeType | undefined => {
	if (!select) return undefined;
	if (!isRecord(select)) {
		throw new Error(`Invalid select type: expected an object, but received ${typeof select}`);
	}

	const { sanitizedSelect, forbiddenPaths } = validateSelect(select, whitelist);
	if (forbiddenPaths.length > 0) {
		throw new Error(`Forbidden select paths: ${forbiddenPaths.join(', ')}`);
	}

	return sanitizedSelect as SelectIncludeType | undefined;
};

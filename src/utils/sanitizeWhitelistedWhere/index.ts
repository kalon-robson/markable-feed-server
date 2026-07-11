/* eslint-disable @typescript-eslint/no-explicit-any */
import { validOperators, type Where, type WhereField } from '../../lib/types.js';

export type WhereWhitelistType = {
	[key: string]: true | WhereWhitelistType;
};

const relationFilterKeys = new Set(['some', 'every', 'none', 'is', 'isNot']);
const logicalKeys = new Set(['AND', 'OR', 'and', 'or']);
const operatorKeys = new Set<string>([...validOperators, 'mode']);

const isRecord = (value: unknown): value is Record<string, unknown> => (
	typeof value === 'object' && value !== null && !Array.isArray(value)
);

const isScalarFieldFilter = (value: unknown): boolean => {
	if (!isRecord(value)) return true;
	const keys = Object.keys(value);
	if (keys.length === 0) return true;
	return keys.every((k) => operatorKeys.has(k));
};

const convertWhereField = (whereField: any): WhereField => {
	const result: WhereField = {};
	let hasOperator = false;
	// eslint-disable-next-line no-restricted-syntax
	for (const key of validOperators) {
		if (whereField[key] !== undefined) {
			hasOperator = true;
			if (key === 'not_equals') {
				result.not = { equals: whereField[key] };
			} else {
				result[key] = whereField[key];
			}
		}
	}
	if (whereField.mode !== undefined) {
		const { mode } = whereField;
		if (mode === 'default' || mode === 'insensitive') {
			hasOperator = true;
			(result as any).mode = mode;
		}
	}
	if (!hasOperator) {
		result.equals = '';
	}
	return result;
};

const convertWhereNode = (node: any): Where => {
	const result: Where = {};
	if (!isRecord(node)) return result;

	// eslint-disable-next-line no-restricted-syntax
	for (const [key, value] of Object.entries(node)) {
		if (operatorKeys.has(key)) {
			if (key === 'not_equals') {
				(result as any).not = { equals: value };
			} else {
				(result as any)[key] = value;
			}
			// eslint-disable-next-line no-continue
			continue;
		}

		if (logicalKeys.has(key)) {
			const capitalizedKey = key.toUpperCase();
			const items = Array.isArray(value) ? value : [value];
			(result as any)[capitalizedKey] = items
				.filter((subWhere: any) => isRecord(subWhere))
				.map((subWhere: any) => convertWhereNode(subWhere));
		} else if (key === 'field') {
			const fieldName = typeof value === 'string' ? value : undefined;
			const { relation, value: fieldValue } = node;

			const buildFieldFilter = (includeRelation: boolean): Record<string, any> => {
				const fieldFilter: Record<string, any> = {};

				if (!includeRelation) {
					Object.assign(fieldFilter, convertWhereField(fieldValue ?? {}));
				}

				if (includeRelation && isRecord(relation)) {
					Object.keys(relation).forEach((relOp) => {
						const { [relOp]: nestedWhere } = relation;
						if (nestedWhere !== undefined) {
							const nestedInput = includeRelation && fieldValue !== undefined && isRecord(nestedWhere) && nestedWhere.value === undefined
								? { ...nestedWhere, value: fieldValue }
								: nestedWhere;
							fieldFilter[relOp] = convertWhereNode(nestedInput);
						}
					});
				}

				return fieldFilter;
			};

			if (fieldName) {
				(result as any)[fieldName] = buildFieldFilter(isRecord(relation));
			} else if (Array.isArray(value)) {
				const fieldNames = value.filter((field): field is string => typeof field === 'string' && field.length > 0);
				if (fieldNames.length) {
					const clause = (field: string, includeRelation: boolean): Record<string, unknown> => ({
						[field]: buildFieldFilter(includeRelation),
					});

					const clauses = fieldNames.map((field, index) => clause(field, index === 0 && isRecord(relation)));
					if (clauses.length === 1) {
						Object.assign(result, clauses[0]);
					} else {
						const existingAnd = Array.isArray((result as any).AND) ? (result as any).AND : [];
						(result as any).AND = [...existingAnd, ...clauses];
					}
				}
			}
		} else if (key !== 'value' && key !== 'relation') {
			if (relationFilterKeys.has(key)) {
				(result as any)[key] = convertWhereNode(value);
			} else if (isRecord(value)) {
				(result as any)[key] = convertWhereNode(value);
			}
		}
	}

	return result;
};

const convertWhere = (where: any): Where => convertWhereNode(where);

const sanitizeWhereObject = (
	whereObject: Record<string, unknown>,
	whitelist: WhereWhitelistType,
	path: string[] = [],
): { sanitized: Record<string, unknown>; forbidden: string[] } => {
	const sanitized: Record<string, unknown> = {};
	const forbidden: string[] = [];

	Object.entries(whereObject).forEach(([key, value]) => {
		if (logicalKeys.has(key)) {
			if (Array.isArray(value)) {
				const nested = value.reduce<{ items: Record<string, unknown>[]; forbidden: string[] }>(
					(acc, item, index) => {
						if (isRecord(item)) {
							const nestedResult = sanitizeWhereObject(item, whitelist, [...path, `${key}[${index}]`]);
							acc.items.push(nestedResult.sanitized);
							acc.forbidden.push(...nestedResult.forbidden);
						}
						return acc;
					},
					{ items: [], forbidden: [] },
				);
				sanitized[key] = nested.items;
				forbidden.push(...nested.forbidden);
				return;
			}

			if (isRecord(value)) {
				const nestedResult = sanitizeWhereObject(value, whitelist, [...path, key]);
				sanitized[key] = nestedResult.sanitized;
				forbidden.push(...nestedResult.forbidden);
				return;
			}

			sanitized[key] = value;
			return;
		}

		if (operatorKeys.has(key)) {
			sanitized[key] = value;
			return;
		}

		if (relationFilterKeys.has(key)) {
			if (isRecord(value)) {
				const nestedResult = sanitizeWhereObject(value, whitelist, [...path, key]);
				sanitized[key] = nestedResult.sanitized;
				forbidden.push(...nestedResult.forbidden);
				return;
			}

			sanitized[key] = value;
			return;
		}

		const whitelistEntry = whitelist[key];
		if (!whitelistEntry) {
			if (isScalarFieldFilter(value)) {
				sanitized[key] = value;
				return;
			}
			forbidden.push([...path, key].join('.'));
			return;
		}

		if (whitelistEntry === true) {
			sanitized[key] = value;
			return;
		}

		if (isRecord(value)) {
			const nestedResult = sanitizeWhereObject(value, whitelistEntry, [...path, key]);
			sanitized[key] = nestedResult.sanitized;
			forbidden.push(...nestedResult.forbidden);
			return;
		}

		sanitized[key] = value;
	});

	return { sanitized, forbidden };
};

export const sanitizeWhitelistedWhere = (
	where: unknown,
	whitelist: WhereWhitelistType,
): Where => {
	const converted = convertWhere(where);
	const { sanitized, forbidden } = sanitizeWhereObject(converted, whitelist);
	const forbiddenFields = [...new Set(forbidden)];
	if (forbiddenFields.length > 0) {
		throw new Error(`Forbidden where fields: ${forbiddenFields.join(', ')}`);
	}
	return sanitized as Where;
};

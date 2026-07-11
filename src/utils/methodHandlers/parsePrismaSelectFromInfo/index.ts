import type { GraphQLResolveInfo } from 'graphql';
import type { ResolveTree } from 'graphql-parse-resolve-info';
import { parseResolveInfo } from 'graphql-parse-resolve-info';

export function getPrismaSelectFromInfo(
	info: GraphQLResolveInfo,
): unknown {
	const parsedInfo = parseResolveInfo(info);

	if (
		!parsedInfo
		|| !parsedInfo.fieldsByTypeName
		|| Object.keys(parsedInfo.fieldsByTypeName).length === 0
	) return undefined;

	function buildSelect(tree: ResolveTree): Record<string, unknown> {
		const select: Record<string, unknown> = {};
		// eslint-disable-next-line no-restricted-syntax
		for (const [fieldName, fieldTree] of Object.entries(tree.fieldsByTypeName[Object.keys(tree.fieldsByTypeName)[0]])) {
			if (
				fieldTree.fieldsByTypeName
				&& Object.keys(fieldTree.fieldsByTypeName).length > 0
			) {
				select[fieldName] = { select: buildSelect(fieldTree) };
			} else {
				select[fieldName] = true;
			}
		}
		return select;
	}

	let select = buildSelect(parsedInfo as ResolveTree);

	if (
		select
		&& typeof select === 'object'
		&& 'items' in select
		&& select.items
		&& typeof select.items === 'object'
		&& 'select' in select.items
	) {
		select = select.items.select as Record<string, unknown>;
	}

	return select;
}

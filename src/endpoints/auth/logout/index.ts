import { ActivityLogActionType, ActivityLogEntityType } from '../../../../databases/maindb/client/index.js';
import { createActivityLog } from '../../../lib/activityLog/index.js';
import { authorize } from '../../../lib/authorize/index.js';
import type { EndpointHandler } from '../../../lib/types.js';
import { maindb } from '../../../prisma/maindb/index.js';

export const logout: EndpointHandler<unknown, boolean> = async (_, req, res) => {
	try {
		const viewer = await authorize(req);

		if (!viewer) {
			res.clearCookie('viewer');
			return true;
		}

		const token = req.get('X-CSRF-TOKEN');

		if (token) {
			const session = await maindb.session.delete({
				where: {
					token,
				},
				include: {
					user: {
						select: {
							id: true,
						},
					},
				},
			});

			await createActivityLog({
				action: ActivityLogActionType.UPDATE,
				entityType: ActivityLogEntityType.USER,
				entityId: session.user.id,
				description: 'User logged out',
				userId: session.user.id,
			});
		}

		res.clearCookie('viewer');

		return true;
	} catch (err) {
		throw new Error(`Failed to logout: ${err}`);
	}
};

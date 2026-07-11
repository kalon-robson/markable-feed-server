import type { ActivityLog, ActivityLogActionType, ActivityLogEntityType } from '../../../databases/maindb/client/client.js';
import { maindb } from '../../prisma/maindb/index.js';

type ActivityLogInput = {
	userId?: string;
	action: ActivityLogActionType;
	entityType: ActivityLogEntityType;
	entityId: string;
	description?: string;
};

export const createActivityLog = async ({
	userId,
	action,
	entityType,
	description,
	entityId,
}: ActivityLogInput): Promise<ActivityLog> => {
	try {
		const activityLog = await maindb.activityLog.create({
			data: {
				description,
				entityType,
				entityId,
				type: action,
				userId,
			},
		});

		return activityLog;
	} catch (err) {
		throw new Error(`Error creating activity log: ${err}`);
	}
};

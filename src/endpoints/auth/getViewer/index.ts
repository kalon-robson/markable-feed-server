import { authorize } from '../../../lib/authorize/index.js';
import type { EndpointHandler } from '../../../lib/types.js';
import { type Viewer } from './types.js';

export const getViewer: EndpointHandler<unknown, Viewer> = async (_, req, res) => {
	try {
		const viewer = await authorize(req);

		if (!viewer) {
			res.clearCookie('viewer');
			throw new Error('Viewer not found');
		}

		return {
			id: viewer.id,
			firstName: viewer.firstName,
			lastName: viewer.lastName,
			email: viewer.email,
			didRequest: true,
			token: req.get('X-CSRF-TOKEN') ?? undefined,
			role: viewer.role,
		};
	} catch (err) {
		throw new Error(`Error in getViewer: ${err}`);
	}
};

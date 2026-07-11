export type Viewer = {
	id?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	token?: string;
	role?: string;
	redirectTo?: string;
	didRequest: boolean;
};

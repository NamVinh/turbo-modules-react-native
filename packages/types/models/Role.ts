export interface PermissionRoleInterface {
	_id?: Id;
	key: string;
	actions: string[];
}

export interface UpdateManyRoleMutateProps {
	_id?: Id;
	name?: string;
	permissions: PermissionRoleInterface[];
}

export interface LocalRole {
	_id: Id;
	name: string;
	description?: string;
	permissions: PermissionRoleInterface[];
}
export interface Role {
	_id: Id;
	name: string;
	description: string;
	permissions: PermissionRoleInterface[];
	onlyOJT: boolean;
	status: boolean;
	priority: number;
	modifiedBy: Id;
	_destroy: boolean;
	createdAt: string;
	updatedAt: string;
	id: Id;
}

import { type Role } from './Role';

export interface User {
	_id: Id;
	id: Id;
	email: string;
	emailVerifiedAt: Date;
	remember: boolean;
	fullName: string;
	phone: string;
	superAdmin: boolean;
	limitLoginAttempts: number;
	lastLogin: null;
	isPassChanged: boolean;
	isDisabled: boolean;
	userType: string;
	userStatus: string;
	_destroy: boolean;
	createdAt: Date;
	updatedAt: Date;
	roleId: Role;
	token: Token;
}

export interface Token {
	accessKey: string;
	refreshToken: string;
}

export interface Permission {
	_id: Id;
	id: Id;
	key: string;
	actions: string[];
}

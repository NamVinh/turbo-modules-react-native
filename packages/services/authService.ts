import { type User } from '@biso24/types/models/User';

import axiosClient from './axiosClient';

export interface AuthQueryKeys {
	all: ['auth'];
}

export enum Modules {
	Bizcore = 'core',
	HCM = 'hcm',
	Accountant = 'accountant',
	Purchase = 'purchase',
	Sales = 'sales',
	Warehouse = 'warehouse',
	Workspace = 'workspace',
}

export enum PermissionModules {
	Biso = 'BISO_MODULES',
	Workspace = 'WORK_SPACE',
}

export interface LoginFormData {
	email: string;
	password: string;
	from?: 'WORK_SPACE';
}

export interface ForgotPasswordFormData {
	email: string;
	module: Modules;
}

export interface ChangePasswordFormData {
	id?: Id;
	oldPassword: string;
	password: string;
	confirmPassword: string;
}

export interface ResetPasswordFormData {
	id?: Id;
	password: string;
	confirmPassword: string;
}

export interface VerifiedAccountData {
	userId: Id;
	token: string;
}

export interface ForgotPasswordVerifiedFormData {
	id?: Id;
	password: string;
	password_confirmation: string;
}

export interface AuthService {
	login: (data: LoginFormData) => Promise<User>;
	forgotPassword: (data: ForgotPasswordFormData) => Promise<null>;
	changePassword: (data: ChangePasswordFormData) => Promise<User>;
	resetPassword: (data: ResetPasswordFormData) => Promise<User>;
	verifiedAccount: (data: VerifiedAccountData) => Promise<any>;
	forgotPasswordVerified: (data: ForgotPasswordVerifiedFormData) => Promise<User>;
}

export const authQueryKeys: AuthQueryKeys = {
	all: ['auth'],
};

const authService: AuthService = {
	login: async (data) => {
		return await axiosClient.post('/auth/login', data);
	},
	changePassword: async (data) => {
		return await axiosClient.post('/users/change-password', data);
	},
	resetPassword: async (data) => {
		return await axiosClient.post('/users/reset-password', data);
	},
	forgotPassword: async (data) => {
		return await axiosClient.post('/accounts/forgot-password', data);
	},
	verifiedAccount: async ({ userId, token }) => {
		return await axiosClient.get(`/accounts/verify-account/${userId}/${token}`);
	},
	forgotPasswordVerified: async (data) => {
		return await axiosClient.post('/accounts/passwords', data);
	},
};

export default authService;

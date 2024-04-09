import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import { type StateStorage, createJSONStorage, persist } from 'zustand/middleware';

import { type User } from '@biso24/types/models/User';

export interface AuthState {
	user: User | null;
	setUser: (user: User | null) => void;

	rememberMe: boolean;
	setRememberMe: (rememberMe: boolean) => void;
}

const storageMMKV = new MMKV();

// Custom storage object
const storage: StateStorage = {
	setItem: (name, value) => {
		storageMMKV.set(name, value);
	},
	getItem: (name) => {
		const value = storageMMKV.getString(name);
		return value ?? null;
	},
	removeItem: (name) => {
		storageMMKV.delete(name);
	},
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => {
			return {
				user: null,
				setUser: (user: User | null) => {
					set({
						user,
					});
				},

				rememberMe: true,
				setRememberMe: (rememberMe: boolean) => {
					set({
						rememberMe,
					});
				},
			};
		},
		{
			name: 'Biso24-Auth',
			storage: createJSONStorage(() => {
				return storage;
			}),
			onRehydrateStorage: () => {
				return (state) => {
					if (!state?.rememberMe) {
						state?.setUser(null);
					}
				};
			},
		},
	),
);

const useAuth = () => {
	const { user, setUser } = useAuthStore();

	return {
		user,
		setUser,
	};
};

export default useAuth;

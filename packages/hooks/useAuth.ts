import { type User } from '@biso24/types/models/User';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { create } from 'zustand';
import { type StateStorage, createJSONStorage, persist } from 'zustand/middleware';

export interface AuthState {
	user: User | null;
	setUser: (user: User | null) => void;

	rememberMe: boolean;
	setRememberMe: (rememberMe: boolean) => void;
}

const storageMMKV = new MMKVLoader().initialize();

// Custom storage object
const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (await storageMMKV.getStringAsync(name)) || null;
	},
	setItem: async (name: string, value: string): Promise<void> => {
		await storageMMKV.setStringAsync(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		storageMMKV.removeItem(name);
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

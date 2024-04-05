import { useAuthStore } from '@biso24/hooks/useAuth';

export const destroyAllZustandPersist = () => {
	const zustandPersistStores = [useAuthStore];
	zustandPersistStores.forEach((store) => {
		store.persist.clearStorage();
	});
};

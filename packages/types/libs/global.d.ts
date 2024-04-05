export {};

declare global {
	// * global for integrate API
	type Id = string;

	type APIFilter<T = null> = Record<string, any> & T;

	interface ServerResponsePagination<T = null> {
		data: T[];
		limit: number | null;
		page: number | null;
		total: number | null;
		totalPages: number | null;
	}
}

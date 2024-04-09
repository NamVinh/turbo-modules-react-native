export type RequireOne<T, Keys extends keyof T = keyof T> = T &
	{
		[K in Keys]-?: { [P in K]: T[P] };
	}[Keys];

import { useAuthStore } from '@biso24/hooks/useAuth';
import { type Token } from '@biso24/types/models/User';
import { destroyAllZustandPersist } from '@biso24/utils';
import axios, { type AxiosError, type CreateAxiosDefaults } from 'axios';
import memoize from 'memoize';
import { Platform } from 'react-native';

const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.API_DOMAIN_URL,
	headers: {
		'Content-Type': 'application/json',
	},
};
const axiosClient = axios.create(axiosOptions);

const refreshTokenRequest = async (options: CreateAxiosDefaults) => {
	const axiosClient = axios.create(options);
	try {
		const { user, setUser } = useAuthStore.getState();
		const hostName = Platform.OS === 'ios' ? 'ios_host' : 'android_host';
		if (!user) {
			return;
		}

		const {
			data: { data: token },
		} = await axiosClient.post<{ data: Token }>(
			'/auth/refresh-token',
			{
				refreshToken: user.token.refreshToken,
			},
			{
				headers: {
					domain: process.env.API_DOMAIN_URL || hostName,
				},
			},
		);

		setUser({
			...user,
			token,
		});
		return token;
	} catch {
		const { setUser } = useAuthStore.getState();
		setUser(null);
		destroyAllZustandPersist();
	}
};

const memoRefreshTokenRequest = memoize(refreshTokenRequest, {
	maxAge: 10000,
});

axiosClient.interceptors.request.use(
	(request) => {
		const { user } = useAuthStore.getState();
		const hostName = Platform.OS === 'ios' ? 'ios_host' : 'android_host';
		if (!request.headers.Authorization && user) {
			request.headers.Authorization = `Bearer ${user.token.accessKey}`;
		}
		request.headers.domain = process.env.API_DOMAIN_URL || hostName;

		return request;
	},
	async (error: AxiosError) => {
		return await Promise.reject(error);
	},
);

const MAX_RETRY = 3;

let retry = 0;
const counterRetry = async () => {
	return retry++;
};

axiosClient.interceptors.response.use(
	(response) => {
		return response.data.data!;
	},
	async (error) => {
		if (error.response?.data?.message === 'jwt expired' && retry <= MAX_RETRY) {
			void counterRetry();
			const token = await memoRefreshTokenRequest(axiosOptions);
			const request = error.config;
			if (token) {
				request!.headers.Authorization = `Bearer ${token.accessKey}`;
			}
			return await axiosClient(request);
		} else {
			retry = 0;
		}

		if (error.response?.data?.message === 'jwt malformed') {
			const { setUser } = useAuthStore.getState();
			setUser(null);
			destroyAllZustandPersist();
			return;
		}

		return await Promise.reject(error.response?.data || error);
	},
);

export default axiosClient;

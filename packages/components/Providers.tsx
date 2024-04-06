import theme from '@biso24/theme';
import { NativeBaseProvider } from '@gluestack-ui/themed-native-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { type PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

const staleTime = 20 * 1000; // 20ms

const getTimeBySecondAgo = (second: number) => {
	const date = new Date();
	date.setSeconds(date.getSeconds() - second);
	return date.getMilliseconds();
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime,
			initialDataUpdatedAt: getTimeBySecondAgo(staleTime / 1000),
		},
	},
});

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<NativeBaseProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<SafeAreaView>{children}</SafeAreaView>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</NativeBaseProvider>
	);
};
export default Providers;

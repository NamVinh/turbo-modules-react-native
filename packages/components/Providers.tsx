import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { createProvider } from '@gluestack-ui/provider';
import { ToastProvider } from '@gluestack-ui/toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { config } from '@biso24/theme';

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

const GluestackUIStyledProvider = createProvider({ StyledProvider });

type GluestackUIProviderProps = Partial<React.ComponentProps<typeof GluestackUIStyledProvider>>;

const Providers = ({ children, ...props }: GluestackUIProviderProps) => {
	return (
		<GluestackUIStyledProvider colorMode={props.colorMode ? props.colorMode : 'light'} config={config} {...props}>
			<OverlayProvider>
				<ToastProvider>
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
				</ToastProvider>
			</OverlayProvider>
		</GluestackUIStyledProvider>
	);
};
export default Providers;

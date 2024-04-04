import theme from '@biso24/theme';
import { NativeBaseProvider } from 'native-base';
import React, { type PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<NativeBaseProvider theme={theme}>
			<SafeAreaView>{children}</SafeAreaView>
		</NativeBaseProvider>
	);
};
export default Providers;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Icon from '@biso24/components/Icon';
import Providers from '@biso24/components/Providers';
import WelcomeShare from '@biso24/components/WelcomeShare';
import useAuth from '@biso24/hooks/useAuth';
import authService, { type LoginFormData } from '@biso24/services/authService';
import { Pressable } from '@gluestack-ui/themed-native-base';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, useColorScheme } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
// 	title: string;
// }>;

// const Section = ({ children, title }: SectionProps): React.JSX.Element => {
// 	const isDarkMode = useColorScheme() === 'dark';
// 	return (
// 		<View style={styles.sectionContainer}>
// 			<Text
// 				style={[
// 					styles.sectionTitle,
// 					{
// 						color: isDarkMode ? Colors.white : Colors.black,
// 					},
// 				]}
// 			>
// 				{title}
// 			</Text>
// 			<Text
// 				style={[
// 					styles.sectionDescription,
// 					{
// 						color: isDarkMode ? Colors.light : Colors.dark,
// 					},
// 				]}
// 			>
// 				{children}
// 			</Text>
// 		</View>
// 	);
// };

const App = (): React.JSX.Element => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<Providers>
			<SafeAreaView style={backgroundStyle}>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}
				/>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
					<Header />
					<View
						style={{
							backgroundColor: isDarkMode ? Colors.black : Colors.white,
						}}
					>
						<WelcomeShare />
						<Example />
						<Icon
							icon="add-document"
							size={64}
							// onClick={async () => {
							// 	await login.mutateAsync({
							// 		email: 'hoand+1102@biso24.com',
							// 		password: 'Biso24@2022',
							// 		from: 'WORK_SPACE',
							// 	});
							// }}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Providers>
	);
};

export const Example = () => {
	const { user, setUser } = useAuth();
	const login = useMutation({
		mutationFn: async (data: LoginFormData) => {
			const user = await authService.login(data);
			setUser(user);
		},
	});
	console.log(user);
	return (
		<Pressable
			onPress={async () => {
				await login.mutateAsync({
					email: 'hoand+1102@biso24.com',
					password: 'Biso24@2022',
					from: 'WORK_SPACE',
				});
			}}
		>
			<Icon icon="add-document" size={64} color="red" />
		</Pressable>
	);
};

// const styles = StyleSheet.create({
// 	sectionContainer: {
// 		marginTop: 32,
// 		paddingHorizontal: 24,
// 	},
// 	sectionTitle: {
// 		fontSize: 24,
// 		fontWeight: '600',
// 	},
// 	sectionDescription: {
// 		marginTop: 8,
// 		fontSize: 18,
// 		fontWeight: '400',
// 	},
// 	highlight: {
// 		fontWeight: '700',
// 	},
// });

export default App;

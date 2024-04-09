import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from '@biso24/components/Icon';

import { Logo } from '~/components/Logo';
import HomeScreen from '~/screens/Home';
import LoginScreen from '~/screens/Login';

import routes from './routes';

export type RootStackParamList = {
	Root: undefined;
	Login: undefined;

	Home: undefined;
	Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName={routes.Home}
			screenOptions={{
				tabBarStyle: { backgroundColor: 'white' },
			}}
		>
			<Tab.Screen
				name={routes.Home}
				component={HomeScreen}
				options={{
					headerTitle: () => {
						return <Logo style={{ width: 100 }} />;
					},
					tabBarIcon: ({ color }) => {
						return <Icon icon="accounting-module" color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const PublicNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.Login as keyof RootStackParamList}
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const PermissionNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.Root as keyof RootStackParamList}
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export const Navigator = () => {
	const isAuth = true;

	return <NavigationContainer>{isAuth ? <PermissionNavigator /> : <PublicNavigator />}</NavigationContainer>;
};

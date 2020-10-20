import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
	StyleSheet,
} from 'react-native';

import Home from './views/Home'
import AboutUs from './views/AboutUs'
const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				// ! For all screens
				screenOptions={{
					headerStyle: {
						backgroundColor: '#F4511E',
					},
					headerTintColor: '#FFF',
					headerTitleStyle: {
						fontWeight: 'normal'
					},
					headerTitleAlign: 'center'
				}}
			>
				<Stack.Screen
					name="Home"
					options={{
						title: 'Home',
						// !Exclusive for one screen
						// headerStyle: {
						// 	backgroundColor: 'red',
						// },
						// headerTintColor: '#FFF',
						// headerTitleStyle: {
						// 	fontWeight: 'normal'
						// },
						// headerTitleAlign: 'center'
					}}
					component={Home}
				/>
				<Stack.Screen
					name="AboutUs"
					options={({ route: { params } }) => ({
						title: params.clientId
					})}
					component={AboutUs}
				/>
			</Stack.Navigator>
		</NavigationContainer >
	);
};

const styles = StyleSheet.create({

});

export default App;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../../screens';
import {TabNavigator} from '../TabNavigator';
import {LoginScreen, RegisterScreen} from '../../screens/Auth';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  const isAuth = false;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Group>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoritesScreen, HomeScreen, ProfileScreen} from '../../screens';
import {TabParams} from '../types';

const Tab = createBottomTabNavigator<TabParams>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

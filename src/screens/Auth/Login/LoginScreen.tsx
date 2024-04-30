import React from 'react';
import {View} from 'react-native';
import {MainView} from '../../../common';
import {Input} from '../../../common/layout/Input/Input';

export const LoginScreen = () => {
  return (
    <MainView
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        paddingHorizontal: 25,
        gap: 16,
      }}>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <View></View>
    </MainView>
  );
};

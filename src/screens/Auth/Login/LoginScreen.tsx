import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainView, Input, Button} from '../../../common';
import {sharedStyles} from '../sharedStyles';
import {NavigationType} from '../types';

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();

  const onPressLogin = useCallback(() => {
    console.log('Log In');
  }, []);

  const onPressRegister = useCallback(() => {
    console.log('Register');
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <MainView style={sharedStyles.container}>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <View style={sharedStyles.btnContainer}>
        <Button title="Login" style={{flex: 0.5}} onPress={onPressLogin} />
        <Button
          title="Register"
          style={{flex: 0.5}}
          onPress={onPressRegister}
        />
      </View>
    </MainView>
  );
};

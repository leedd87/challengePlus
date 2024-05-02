import React, {useCallback} from 'react';
import {View} from 'react-native';
import {MainView, Input, Button} from '../../../common';
import {sharedStyles} from '../sharedStyles';

export const LoginScreen = () => {
  const onPressLogin = useCallback(() => {
    console.log('Log In');
  }, []);

  const onPressRegister = useCallback(() => {
    console.log('Register');
  }, []);

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

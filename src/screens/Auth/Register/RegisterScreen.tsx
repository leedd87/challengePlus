import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Button, Input, MainView} from '../../../common';
import {sharedStyles} from '../sharedStyles';

export const RegisterScreen = () => {
  const onPressCreate = useCallback(() => {
    console.log('Create account');
  }, []);

  const onPressHaveAccount = useCallback(() => {
    console.log('Have Account');
  }, []);
  return (
    <MainView style={sharedStyles.container}>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Input placeholder="repeat password" />
      <View style={sharedStyles.btnContainer}>
        <Button
          title="Create account"
          style={{flex: 0.5}}
          onPress={onPressCreate}
        />
        <Button
          title="Have an account"
          style={{flex: 0.5}}
          onPress={onPressHaveAccount}
        />
      </View>
    </MainView>
  );
};

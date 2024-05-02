import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Input, MainView} from '../../../common';
import {sharedStyles} from '../sharedStyles';
import {NavigationType} from '../types';

export const RegisterScreen = () => {
  const navigation = useNavigation<NavigationType>();

  const onPressCreate = useCallback(() => {
    console.log('Create account');
  }, []);

  const onPressHaveAccount = useCallback(() => {
    console.log('Have Account');
    navigation.navigate('Login');
  }, [navigation]);

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

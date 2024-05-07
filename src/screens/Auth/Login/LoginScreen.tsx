import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainView, Input, Button} from '../../../common';
import {sharedStyles} from '../sharedStyles';
import {NavigationType} from '../types';
import {useAppDispatch} from '../../../store/hooks';
import {setAuthentication} from '../../../store/features/Auth/authSlice';

import {useSetSignInMutation} from '../../../store/features/Auth/authApiSlice';

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [setSignIn, {isLoading}] = useSetSignInMutation();

  const onPressRegister = useCallback(() => {
    console.log('Register');
    navigation.navigate('Register');
    dispatch(setAuthentication());
  }, [navigation, dispatch]);

  const onPressLogin = useCallback(async () => {
    try {
      const result = await setSignIn({email, password}).unwrap();
      console.log(
        '🚀 ~ file: LoginScreen.tsx:34 ~ onPressRegister ~ result:',
        result,
      );
      // dispatch(setAuthentication(result));
    } catch (error) {
      console.log(error);
    }
  }, [email, password, setSignIn]);

  return (
    <MainView style={sharedStyles.container}>
      <Input placeholder="email" onChangeText={value => setEmail(value)} />
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

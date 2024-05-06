import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainView, Input, Button} from '../../../common';
import {sharedStyles} from '../sharedStyles';
import {NavigationType} from '../types';
import {useAppDispatch} from '../../../store/hooks';
import {setAuthentication} from '../../../store/features/Auth/authSlice';
import {useFetchBreedsQuery} from '../../../store/features/Dogs/dogsApiSlice';

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const dispatch = useAppDispatch();

  const onPressLogin = useCallback(() => {
    console.log('Log In');
    dispatch(setAuthentication());
  }, [dispatch]);

  const onPressRegister = useCallback(() => {
    console.log('Register');
    navigation.navigate('Register');
  }, [navigation]);

  const {data = [], isFetching} = useFetchBreedsQuery();

  return (
    <MainView style={sharedStyles.container}>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <View>
        <Text> number of dogs fetched: {data.length}</Text>
      </View>
      {data.map(breed => {
        return (
          <View key={breed.id}>
            <Text>{breed.name}</Text>
          </View>
        );
      })}
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

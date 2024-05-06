import React, {useCallback} from 'react';
import {Button, MainView} from '../../common';
import {View} from 'react-native';

import {useAppDispatch} from '../../store/hooks';
import {logOut} from '../../store/features/Auth/authSlice';

export const ProfileScreen = () => {
  const dispatch = useAppDispatch();

  const onPressLogOut = useCallback(() => {
    console.log('Log In');
    dispatch(logOut());
  }, [dispatch]);

  return (
    <MainView>
      <View style={{paddingHorizontal: 25}}>
        <Button title="Logout" onPress={onPressLogOut} />
      </View>
    </MainView>
  );
};

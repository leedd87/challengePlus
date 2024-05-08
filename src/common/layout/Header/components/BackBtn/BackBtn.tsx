import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../../../../screens/Auth/types';

export const BackBtn = () => {
  const navigation = useNavigation<NavigationType>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <Text>B</Text>
    </TouchableOpacity>
  );
};

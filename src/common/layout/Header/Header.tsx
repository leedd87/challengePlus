import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BackBtn} from './components/BackBtn';
import {styles} from './styles';

interface HeaderProps {
  title?: string;
  hasBackBtn?: boolean;
}

export const Header = ({title, hasBackBtn}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {hasBackBtn ? <BackBtn /> : null}
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
      </View>
    </View>
  );
};

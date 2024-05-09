import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {BackBtn} from './components/BackBtn';
import {styles} from './styles';

interface HeaderProps {
  title?: string;
  hasBackBtn?: boolean;
  style?: ViewStyle;
}

export const Header = ({title, hasBackBtn, style}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {hasBackBtn ? <BackBtn /> : null}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

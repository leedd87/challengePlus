import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

interface ButtonProps extends TouchableWithoutFeedbackProps {
  style?: ViewStyle;
  title?: string;
}

export const Button = ({style, title, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

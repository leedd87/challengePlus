import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

interface ButtonProps extends TouchableWithoutFeedback {
  style?: ViewStyle;
}

export const Button = ({style, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity style={[{backgroundColor: 'yellow'}, style]} {...props}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

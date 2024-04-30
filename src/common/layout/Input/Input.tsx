import React from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  style?: TextStyle;
}

export const Input = ({style, ...props}: InputProps) => {
  return (
    <>
      <TextInput style={[styles.input, style]} {...props} />
    </>
  );
};

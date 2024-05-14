import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NewsCardProps} from './types';

export const NewsCard = ({
  title,
  content,
  author,
  onPressDetail,
  isFavorite,
  ...props
}: NewsCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressDetail}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <Text>{content}</Text>
      <Text>{author}</Text>

      <View style={{alignItems: 'flex-end', padding: 10}}>
        <TouchableOpacity {...props}>
          {isFavorite === undefined ? (
            <Text>Favorites</Text>
          ) : (
            <Text>Eliminar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

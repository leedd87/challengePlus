import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface NewsCardProps {
  title?: string;
  content?: string;
  author?: string;
  onPress?: () => void;
}

export const NewsCard = ({title, content, author, onPress}: NewsCardProps) => {
  return (
    <View
      key={title}
      style={{
        marginBottom: 20,
        marginHorizontal: 25,
        padding: 10,
        gap: 8,
        borderWidth: 1,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
      </TouchableOpacity>
      <Text>{content}</Text>
      <Text>{author}</Text>
    </View>
  );
};

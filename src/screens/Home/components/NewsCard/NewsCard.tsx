import React from 'react';
import {Text, View} from 'react-native';

interface NewsCardProps {
  title?: string;
  content?: string;
  author?: string;
}

export const NewsCard = ({title, content, author}: NewsCardProps) => {
  return (
    <View key={title} style={{marginBottom: 20}}>
      <Text>{title}</Text>
      <Text>{content}</Text>
      <Text>{author}</Text>
    </View>
  );
};

import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NewsCardProps} from './types';

export const NewsCard = ({
  title,
  content,
  author,
  onPressDetail,
  onPressFavorite,
  onPressDelete,
  isFavorite,
  ...props
}: NewsCardProps) => {
  const [disabled, setDisabled] = useState(false);
  const [textColor, setTextColor] = useState('black');

  const handlePressFavorite = () => {
    onPressFavorite?.();
    setDisabled(true);
    setTextColor('red');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressDetail}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <Text>{content}</Text>
      <Text>{author}</Text>

      <View style={{alignItems: 'flex-end', padding: 10}}>
        <TouchableOpacity
          onPress={handlePressFavorite}
          disabled={disabled}
          {...props}>
          {!isFavorite && <Text style={{color: textColor}}>Favorites</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete} {...props}>
          {isFavorite && <Text>Eliminar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

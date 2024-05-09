import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NewsCardProps} from './types';

export const NewsCard = ({
  title,
  content,
  author,
  onPress,
  addFavorite,
  removeFavorite,
}: NewsCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onPressFavoriteBtn = useCallback(() => {
    if (!isFavorite) {
      addFavorite?.();
    } else {
      removeFavorite?.();
    }
    setIsFavorite(!isFavorite);
  }, [addFavorite, removeFavorite, setIsFavorite, isFavorite]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <Text>{content}</Text>
      <Text>{author}</Text>
      <View style={{alignItems: 'flex-end', padding: 10}}>
        <TouchableOpacity onPress={onPressFavoriteBtn}>
          {!isFavorite ? <Text>Favorites</Text> : <Text>Eliminar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

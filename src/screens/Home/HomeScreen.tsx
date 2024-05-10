import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header, MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {Article} from '../../store/features/News/types';
import {NavigationType} from '../Auth/types';

import {NewsCard} from './components/NewsCard';
import {useAppDispatch} from '../../store/hooks';
import {
  favoritesNews,
  removeFavoriteNews,
} from '../../store/features/News/newsSlice';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationType>();
  const {data} = useGetNewsQuery(0);
  const articles = data?.articles;

  const onPressCard = (item: Article) => {
    navigation.navigate('Details', {item});
  };

  const onPressFavorite = (item: Article) => {
    dispatch(favoritesNews(item));
  };

  const removeFavoriteArticle = (item: Article) => {
    dispatch(removeFavoriteNews(item));
  };

  return (
    <MainView>
      <Header title="La Capital" />
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <NewsCard
            title={item.title}
            content={item.content}
            author={item.author}
            onPress={() => onPressCard(item)}
            addFavorite={() => onPressFavorite(item)}
            removeFavorite={() => removeFavoriteArticle(item)}
          />
        )}
      />
    </MainView>
  );
};

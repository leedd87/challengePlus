import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header, MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {Article} from '../../store/features/News/types';
import {NavigationType} from '../Auth/types';

import {NewsCard} from './components/NewsCard';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
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

  const onPressFavoriteBtn = useCallback(
    (item: Article) => {
      dispatch(favoritesNews(item));
    },
    [dispatch],
  );

  const onPressDeleteBtn = useCallback(
    (item: Article) => {
      dispatch(removeFavoriteNews(item));
    },
    [dispatch],
  );

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
            onPressDetail={() => onPressCard(item)}
            onPressFavorite={() => onPressFavoriteBtn(item)}
            onPressDelete={() => onPressDeleteBtn(item)}
          />
        )}
      />
    </MainView>
  );
};

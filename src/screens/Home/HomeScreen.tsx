import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header, MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {Article} from '../../store/features/News/types';
import {NavigationType} from '../Auth/types';

import {NewsCard} from './components/NewsCard';
import {useAppDispatch} from '../../store/hooks';
import {favoritesNews} from '../../store/features/News/newsSlice';

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
            onPress={() => onPressFavoriteBtn(item)}
          />
        )}
      />
    </MainView>
  );
};

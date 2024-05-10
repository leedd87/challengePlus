import React from 'react';
import {FlatList} from 'react-native';
import {Header, MainView} from '../../common';
import {useAppSelector} from '../../store/hooks';
import {NewsCard} from '../Home/components/NewsCard';

export const FavoritesScreen = () => {
  const favoritesNews = useAppSelector(state => state.newsSlice.value);

  return (
    <MainView>
      <Header title="Favorites" />
      <FlatList
        data={favoritesNews}
        renderItem={({item}) => (
          <NewsCard
            title={item.title}
            content={item.content}
            author={item.author}
          />
        )}
      />
    </MainView>
  );
};

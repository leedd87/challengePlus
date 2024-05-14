import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {Header, MainView} from '../../common';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {NewsCard} from '../Home/components/NewsCard';
import {Article} from '../../store/features/News/types';
import {removeFavoriteNews} from '../../store/features/News/newsSlice';

export const FavoritesScreen = () => {
  const dispatch = useAppDispatch();

  const favoritesNews = useAppSelector(state => state.newsSlice.value);

  const onPressFavoriteBtn = useCallback(
    (item: Article) => {
      dispatch(removeFavoriteNews(item));
    },
    [dispatch],
  );

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
            isFavorite={true}
            onPress={() => onPressFavoriteBtn(item)}
          />
        )}
      />
    </MainView>
  );
};

import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header, MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {Article} from '../../store/features/News/types';
import {NavigationType} from '../Auth/types';

import {NewsCard} from './components/NewsCard';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const {data} = useGetNewsQuery(0);
  const articles = data?.articles;

  const [favoritesArticles, setFavoriteArticles] = useState<Article[]>([]);

  //TODO SETEAR GLOBALMENTE EL FAVORITOS PARA PODER SER UTILIZADO

  const onPressCard = (item: Article) => {
    navigation.navigate('Details', {item});
  };

  const onPressFavorite = (item: Article) => {
    if (favoritesArticles.includes(item)) {
      const uniqueFavoriteArticles = favoritesArticles.filter(
        favoriteArticle => item.author !== favoriteArticle.author,
      );

      setFavoriteArticles(uniqueFavoriteArticles);
    }
    setFavoriteArticles(prevArticles => [...prevArticles, item]);
  };

  const removeFavoriteArticle = (item: Article) => {
    const updatedFavoriteArticles = favoritesArticles.filter(
      article => article.author !== item.author,
    );
    setFavoriteArticles(updatedFavoriteArticles);
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

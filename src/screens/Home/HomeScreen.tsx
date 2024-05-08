import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {NewsCard} from './components/NewsCard/NewsCard';

export const HomeScreen = () => {
  const {data} = useGetNewsQuery(0);
  const articles = data?.articles;

  return (
    <MainView>
      <FlatList
        data={articles}
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

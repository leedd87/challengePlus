import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';
import {NewsCard} from './components/NewsCard';
import {useNavigation} from '@react-navigation/native';

import {NavigationType} from '../Auth/types';
import {Header} from '../../common/layout/Header/Header';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const {data} = useGetNewsQuery(0);
  const articles = data?.articles;

  const onPressCard = () => {
    navigation.navigate('Details');
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
            onPress={onPressCard}
          />
        )}
      />
    </MainView>
  );
};

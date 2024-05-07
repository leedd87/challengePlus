import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {MainView} from '../../common';
import {useGetNewsQuery} from '../../store/features/News/newsApiSlice';

export const HomeScreen = () => {
  const {data} = useGetNewsQuery(0);
  const articles = data?.articles;

  return (
    <MainView>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <View key={item.title} style={{marginBottom: 20}}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text>{item.author}</Text>
          </View>
        )}
      />
    </MainView>
  );
};

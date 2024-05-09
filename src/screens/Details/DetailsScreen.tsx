import React from 'react';

import {Header} from '../../common/layout/Header';
import {MainView} from '../../common';
import {NewsCard} from '../Home/components/NewsCard';
import {RouteProp, useRoute} from '@react-navigation/native';

import {MainStackParams} from '../../navigation/types';

type DetailsScreenRouteProp = RouteProp<MainStackParams, 'Details'>;

export const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const params = route.params;
  const news = params?.item;

  return (
    <MainView>
      <Header title="Details" hasBackBtn={true} />
      <NewsCard
        title={news.title}
        content={news.content}
        author={news.author}
      />
    </MainView>
  );
};

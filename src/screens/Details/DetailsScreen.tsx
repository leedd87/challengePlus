import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../common/layout/Header';
import {MainView} from '../../common';

export const DetailsScreen = () => {
  return (
    <MainView>
      <Header title="Details" hasBackBtn={true} />
    </MainView>
  );
};

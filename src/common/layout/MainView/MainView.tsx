import React from 'react';
import {View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MainViewProps extends ViewProps {
  children: React.ReactElement;
}

export const MainView = ({children}: MainViewProps) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={{paddingTop: top, paddingBottom: bottom}}>{children}</View>
  );
};

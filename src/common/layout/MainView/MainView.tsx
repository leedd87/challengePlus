import React, {ReactNode} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MainViewProps extends ViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const MainView = ({children, style, ...props}: MainViewProps) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[{paddingTop: top, paddingBottom: bottom}, style]} {...props}>
      {children}
    </View>
  );
};

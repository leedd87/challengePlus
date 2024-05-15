import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 25,
    gap: 16,
  },
  btnContainer: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

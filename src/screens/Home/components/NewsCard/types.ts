import {TouchableWithoutFeedbackProps} from 'react-native';

export interface NewsCardProps extends TouchableWithoutFeedbackProps {
  title?: string;
  content?: string;
  author?: string;
  onPressDetail?: () => void;
  isFavorite?: boolean;
  //TESTING
  onPressFavorite?: () => void;
  onPressDelete?: () => void;
}

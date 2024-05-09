import {Article} from '../store/features/News/types';

export type MainStackParams = {
  Login: undefined;
  Register: undefined;
  Details: {
    item: Article;
  };
  TabNavigator: undefined;
};

export type TabParams = {
  Home: undefined;
  Profile: undefined;
  Favorites: undefined;
};

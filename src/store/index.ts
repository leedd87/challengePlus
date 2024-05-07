import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

import {baseApiSlice} from './api/baseApiSlice';
import {dogApiSlice} from './features/Dogs/dogsApiSlice';
import {newsApiSlice} from './features/News/newsApiSlice';

const getEnhancers = () => {
  if (__DEV__) {
    import('../../ReactotronConfig').then(reactotron => {
      return reactotron.default.createEnhancer?.();
    });
  }

  return [];
};

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(baseApiSlice.middleware as any)
      .concat(dogApiSlice.middleware as any)
      .concat(newsApiSlice.middleware as any);
  },

  //ESTO ES DE REACTOTRON
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(getEnhancers()),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

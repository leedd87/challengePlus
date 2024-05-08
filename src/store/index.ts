import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {rootReducer} from './reducers';

import {baseApiSlice} from './api/baseApiSlice';
import {dogApiSlice} from './features/Dogs/dogsApiSlice';
import {newsApiSlice} from './features/News/newsApiSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getEnhancers = () => {
  if (__DEV__) {
    import('../../ReactotronConfig').then(reactotron => {
      return reactotron.default.createEnhancer?.();
    });
  }

  return [];
};

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseApiSlice.middleware as any)
      .concat(dogApiSlice.middleware as any)
      .concat(newsApiSlice.middleware as any);
  },

  //ESTO ES DE REACTOTRON
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(getEnhancers()),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

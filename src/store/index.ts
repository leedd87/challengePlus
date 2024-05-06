import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import {apiSlice} from './features/Dogs/dogsApiSlice';

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
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },

  //ESTO ES DE REACTOTRON
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(getEnhancers()),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import {combineReducers} from '@reduxjs/toolkit';

import authSlice from '../features/Auth/authSlice';

import {baseApiSlice} from '../api/baseApiSlice';
import {dogApiSlice} from '../features/Dogs/dogsApiSlice';
import {newsApiSlice} from '../features/News/newsApiSlice';

export const rootReducer = combineReducers({
  //[baseApiSlice.reducerPath]: baseApiSlice.reducer,
  [dogApiSlice.reducerPath]: dogApiSlice.reducer,
  [newsApiSlice.reducerPath]: newsApiSlice.reducer,
  authSlice,
});

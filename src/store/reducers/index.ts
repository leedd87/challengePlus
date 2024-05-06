//TODO aca van los Reducers
import {combineReducers} from '@reduxjs/toolkit';

import authSlice from '../features/Auth/authSlice';
import {apiSlice} from '../features/Dogs/dogsApiSlice';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  authSlice,
});

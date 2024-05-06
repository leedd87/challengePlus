//TODO aca van los Reducers
import {combineReducers} from '@reduxjs/toolkit';

import authSlice from '../features/Auth/authSlice';

import {baseApiSlice} from '../api/baseApiSlice';

export const rootReducer = combineReducers({
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  authSlice,
});

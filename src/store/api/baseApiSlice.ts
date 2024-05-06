import {createApi} from '@reduxjs/toolkit/query/react';
import {customBaseQuery} from './customBaseQuery';

const SLICE_NAME = 'baseApiSlice';

export const baseApiSlice = createApi({
  reducerPath: SLICE_NAME,
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});

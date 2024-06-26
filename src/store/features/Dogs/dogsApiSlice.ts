import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Breed} from '../../api/types';

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

export const dogApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builders) {
    return {
      fetchBreeds: builders.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const {useFetchBreedsQuery} = dogApiSlice;

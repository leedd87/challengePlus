import {baseApiSlice} from '../../api/baseApiSlice';
import {News} from './types';

const API_KEY = 'f3a50dc8b3d14b96abeec96fbfec8474';

export const newsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<News, {}>({
      query: () => ({
        url: `/v2/everything?q=keyword&apiKey=${API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: __DEV__,
});

export const {useGetNewsQuery} = newsApiSlice;
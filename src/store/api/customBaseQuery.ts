import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//import {RootState} from '@store/index';
import {getAPIBaseURL} from '../../config';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: getAPIBaseURL(),
});

import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//import {RootState} from '@store/index';
import {getAPIBaseURL, getAPINewsURL} from '../../config';

export const customBaseQuery = fetchBaseQuery({
  //baseUrl: getAPIBaseURL(),
  baseUrl: getAPINewsURL(),
});

import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getAPIBaseURL, getAPINewsURL} from '../../config';

export const customBaseQuery = fetchBaseQuery({
  //baseUrl: getAPIBaseURL(),
  baseUrl: getAPINewsURL(),
});

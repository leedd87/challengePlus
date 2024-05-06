import {IToken, IUser} from '../../../types';
import {baseApiSlice} from '../../api/baseApiSlice';
import {APIMethods} from '../../api/types';
import {ResetPasswordBodyRequest, SignInBodyRequest} from './types';

enum AUTH_CACHE_TAGS {
  Auth = 'Auth',
}

export const authApiSlice = baseApiSlice
  .enhanceEndpoints({
    addTagTypes: Object.keys(AUTH_CACHE_TAGS),
  })
  .injectEndpoints({
    endpoints: builder => ({
      setSignIn: builder.mutation<IToken, SignInBodyRequest>({
        query: body => ({
          url: '/api/v1/auth/sign_in',
          method: APIMethods.POST,
          body,
        }),
        transformResponse: (response: {data: IToken}) => {
          return response.data;
        },
      }),
      setResetPassword: builder.mutation<IUser, ResetPasswordBodyRequest>({
        query: body => ({
          url: '/api/v1/auth/send_reset_password',
          method: APIMethods.POST,
          body,
        }),
        transformResponse: (response: {data: IUser}) => {
          return response.data;
        },
      }),
    }),
    overrideExisting: __DEV__,
  });

export const {useSetSignInMutation, useSetResetPasswordMutation} = authApiSlice;

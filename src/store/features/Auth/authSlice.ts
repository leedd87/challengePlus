import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthInitalState {
  user?: string;
  authenticated: boolean;
}

const initialState: AuthInitalState = {
  user: undefined,
  authenticated: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //authenticated
    setAuthentication: (state, action) => {
      //complete action => el action de aca es el token
      state.authenticated = true;
    },
    //setUser
    //logOut
    logOut: state => {
      state.authenticated = false;
    },
  },
});

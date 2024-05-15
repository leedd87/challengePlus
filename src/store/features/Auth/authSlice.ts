import {createSlice} from '@reduxjs/toolkit';

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
    setAuthentication: state => {
      state.authenticated = true;
    },
    logOut: state => {
      state.authenticated = false;
    },
  },
});

export const {setAuthentication, logOut} = authSlice.actions;
export default authSlice.reducer;

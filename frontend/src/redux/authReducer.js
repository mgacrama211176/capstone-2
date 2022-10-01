import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  token: undefined,
};

export const authToken = 'AUTH_TOKEN';
export const authUser = 'AUTH_USER';
export const authLogout = 'AUTH_LOGOUT';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [authToken]: (state, { payload }) => {
      state.token = payload;
    },
    [authUser]: (state, { payload }) => {
      state.user = payload;
    },
    [authLogout]: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { AUTH_LOGOUT, AUTH_TOKEN, AUTH_USER } = authSlice.actions;

export default authSlice.reducer;

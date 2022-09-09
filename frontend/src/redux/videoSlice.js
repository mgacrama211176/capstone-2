import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  message: '',
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.message = 'logged in!';
    },
    loginFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
      state.message = 'logged out!';
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout } =
  videoSlice.actions;

export default videoSlice.reducer;

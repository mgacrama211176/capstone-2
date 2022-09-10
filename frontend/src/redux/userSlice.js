import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'username',
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
  userSlice.actions;

export default userSlice.reducer;

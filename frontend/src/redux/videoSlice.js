import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
  message: '',
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    FetchStart: (state) => {
      state.loading = true;
    },
    FetchSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.message = 'logged in!';
    },
    FetchFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { FetchStart, FetchSuccess, FetchFailed } = videoSlice.actions;

export default videoSlice.reducer;

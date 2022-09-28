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
    subscription: (state, action) => {
      console.log(state.currentUser.subscribedUsers);
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers.splice(
          state.currentUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },

    saveVideo: (state, action) => {
      if (!state.currentUser.savedVideo.includes(action.payload)) {
        state.currentUser.savedVideo.push(action.payload);
      } else {
        state.currentUser.savedVideo.pull(action.payload);
      }
      state.currentUser = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  subscription,
  save,
} = userSlice.actions;

export default userSlice.reducer;

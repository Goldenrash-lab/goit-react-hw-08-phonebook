import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk } from './thunks';

const initialState = {
  user: null,
  token: '',
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(signInThunk.pending, handlePending)
      .addCase(signInThunk.fulfilled, handleFulfilled)
      .addCase(signInThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

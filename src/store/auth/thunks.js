import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from 'api/auth';

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, ThunkAPI) => {
  try {
    const res = await signUp(body);
    return res;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});
export const signInThunk = createAsyncThunk('auth/signIn', async (body, ThunkAPI) => {
  try {
    const res = await signIn(body);
    return res;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});

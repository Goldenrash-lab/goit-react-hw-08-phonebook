import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: authReducer,
  },
});

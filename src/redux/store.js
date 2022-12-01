import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './appSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

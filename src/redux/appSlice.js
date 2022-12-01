import { createSlice } from '@reduxjs/toolkit';

const AppState = {
  contacts: [],
  filter: '',
};

const appSlice = createSlice({
  name: 'contacts',
  initialState: AppState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(({ id }) => id === action.payload);
      state.contacts.splice(index, 1);
      // return state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, deleteContact, filterContacts } = appSlice.actions;

export const contactsReducer = appSlice.reducer;

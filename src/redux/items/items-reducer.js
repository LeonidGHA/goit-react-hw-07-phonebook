import { createReducer } from '@reduxjs/toolkit';

import { getContacts, postContact, deleteContact } from './items-operations';

export const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

// const isLoading = createReducer(false, {
//   [getContacts.fulfilled]: () => false,
//   [getContacts.pending]: () => true,
//   [getContacts.rejected]: () => false,
// });

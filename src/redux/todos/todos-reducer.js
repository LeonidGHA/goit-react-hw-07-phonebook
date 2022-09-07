import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { changeFilter } from './todos-actions';
import { getContacts, postContact, deleteContact } from './todos-operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (_, { payload }) => payload,

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const isLoading = createReducer(false, {
//   [getContacts.fulfilled]: () => false,
//   [getContacts.pending]: () => true,
//   [getContacts.rejected]: () => false,
// });

export default combineReducers({ items, filter });

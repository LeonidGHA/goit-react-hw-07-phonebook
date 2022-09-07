import * as contactsMockApi from './todos-service';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { fetchGet, fetchPost, fetchDelete } = contactsMockApi;

export const getContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    try {
      const data = await fetchGet();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postContact = createAsyncThunk(
  'contact/postContact',

  async contact => {
    try {
      await fetchPost(contact);
      const newContacts = await fetchGet();
      console.log(newContacts);
      return newContacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    try {
      await fetchDelete(id);

      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

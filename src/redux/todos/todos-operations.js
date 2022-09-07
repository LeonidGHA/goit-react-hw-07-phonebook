import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsMockApi from './todos-service';

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await baseApi.get("/contacts");

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await baseApi.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await baseApi.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "editContact",
  async ({ contactId, updatedData }, thunkApi) => {
    try {
      const { data } = await baseApi.patch(
        `/contacts/${contactId}`,
        updatedData
      );
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

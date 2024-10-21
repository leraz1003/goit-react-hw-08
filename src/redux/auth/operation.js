import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
const setAuthHeader = (token) => {
  baseApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await baseApi.post("/users/signup", userData);
      setAuthHeader(data.token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk("login ", async (userData, thunkApi) => {
  try {
    const { data } = await baseApi.post("/users/login", userData);
    setAuthHeader(data.token);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("logout ", async (_, thunkApi) => {
  try {
    const { data } = await baseApi.post("/users/logout");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "refreshUser",
  async (_, thunkApi) => {
    // Отримуємо збережений токен з локал стореджа
    const savedToken = thunkApi.getState().auth.token;

    // якщо там нічого нема, не виконуємо запит
    if (!savedToken) {
      return thunkApi.rejectWithValue("Token does not exist!");
    }
    // якщо є - встановлюємо по замовчуванню хедер авторизації для запитів

    setAuthHeader(savedToken);
    try {
      const { data } = await baseApi.get("/users/current");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

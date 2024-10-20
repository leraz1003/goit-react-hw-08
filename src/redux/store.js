import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { searchFilterReducer } from "./filters/slice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: searchFilterReducer,
    auth: authSlice,
  },
});

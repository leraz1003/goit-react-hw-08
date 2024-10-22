import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { searchFilterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { modalReducer } from "./modal/slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: searchFilterReducer,
    auth: persistReducer(persistConfig, authReducer),
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
const tokenMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  const result = next(action);
  const state = storeAPI.getState();

  // Set token in axios header after token is updated
  if (state.auth.token) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${state.auth.token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  return result;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

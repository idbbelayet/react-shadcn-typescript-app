import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  fullName: string;
  userId: number;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
const userCookie = document.cookie
  .split("; ")
  .find((cookie) => cookie.trim().startsWith("user="));
const initialState: AuthState = {
  isAuthenticated: userCookie != null,
  user:
    userCookie == null
      ? null
      : JSON.parse(decodeURIComponent(userCookie?.split("=")[1] ?? "")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;

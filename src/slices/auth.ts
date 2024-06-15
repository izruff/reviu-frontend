import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userData: {
    username: string;
  } | null;
  loading: boolean;
}

const initialState: AuthState = {
  userData: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDataSuccess: (
      state,
      action: PayloadAction<AuthState["userData"]>,
    ) => {
      state.userData = action.payload;
      state.loading = false;
    },
    getUserDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { getUserData, getUserDataSuccess, getUserDataFailure } =
  authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userData: {
    username: string;
  } | null;
}

const initialState: AuthState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<AuthState["userData"]>) => {
      state.userData = action.payload;
    },
  },
});

export const { updateUserData } = authSlice.actions;

export default authSlice.reducer;

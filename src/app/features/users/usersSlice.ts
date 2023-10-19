import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLogin: boolean;
  token: string;
  user: object;
}

const initialState: UserState = {
  isLogin: false,
  token: "",
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isLogin = Boolean(action.payload.token);
    },
  },
});

export const { loginAction } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;

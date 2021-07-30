import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userDetails: {
    name: "",
    address: "",
    phone: 0,
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    userDeets(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

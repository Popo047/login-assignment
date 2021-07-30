import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const postNewUserData = createAsyncThunk('auth/postNewUserData', async() => {
//   const response = await fetch('https://food-redux.firebaseio.com/message_list.json')
// })

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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postNewUserData = createAsyncThunk(
  "auth/postNewUserData",
  async (enteredData) => {
    const response = await fetch(
      "https://food-redux-default-rtdb.firebaseio.com/users.json",
      {
        method: "PUT",
        body: JSON.stringify(enteredData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }
);

const initialState = {
  isAuth: false,
  userDetails: {
    name: "",
    address: "",
    phone: 0,
    email: "",
    password: "",
  },
  userInFB: false,
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
  extraReducers: {
    [postNewUserData.fulfilled]: (state) => {
      state.userInFB = true;
    },
    [postNewUserData.rejected]: (state) => {
      state.userInFB = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

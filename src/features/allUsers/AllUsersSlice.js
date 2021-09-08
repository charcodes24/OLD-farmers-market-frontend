import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const userLogin = createAsyncThunk(
  "customer/customerLogin",
  async (form) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    });
    const data = await response.json();
    console.log("USER LOGIN SLICE", data);
    return data;
  }
)

export const allUsersSlice = createSlice({
  name: "allusers",
  initialState: {
    customer: {},
    vendor: {},
    customerLoggedIn: false,
    vendorLoggedIn: false,
    isLoading: false,
    hasError: false,
    errors: [],
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
      [userLogin.fulfilled]: (state, { payload }) => {
        debugger
      if (payload.errors) {
        state.errors = payload.errors;
          state.customerLoggedIn = false;
          state.vendorLoggedIn = false;
        state.hasError = true;
        state.isLoading = false;
      } else if (payload.is_vendor === true) {
        state.vendor = payload;
        console.log("PAYLOAD", payload);
          state.vendorLoggedIn = true;
          state.customerLoggedIn = false;
        state.hasError = false;
          state.isLoading = false;
          state.errors = []
      } else {
          state.customer = payload;
          state.vendorLoggedIn = false;
          state.customerLoggedIn = true;
          state.hasError = false;
          state.isLoading = false;
          state.errors = []
      }
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { } = allUsersSlice.actions

export default allUsersSlice.reducer
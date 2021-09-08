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
    debugger;
    console.log("ERRORS IN LOG IN", data);
    // logInErrors(data)
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
        errors: []
    },
    reducers: {},
    extraReducers: {}
})

export const { } = allUsersSlice.actions

export default allUsersSlice.reducer
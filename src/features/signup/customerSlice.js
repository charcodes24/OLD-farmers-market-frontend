import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create customer
export const createCustomer = createAsyncThunk(
    'customer/createCustomer',
    async (form) => {
        const response = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
          body: JSON.stringify({
            customer: {
              username: form.username,
              password: form.password,
              password: form.password_confirmation
            }
            })
        })
      const data = await response.json()
      console.log("DATA", data)
      if (data.errors) {
        console.log('errors!!')
      } 
      return data 
    }
)

//customer login 
export const customerLogin = createAsyncThunk(
  'customer/customerLogin',
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
    })
    const data = await response.json()
    console.log("LOGIN", data)
    if (data.errors) {
      console.log('LOGIN ERRORS')
    }
    return data 
  }
)

//keep customer logged in 
export const stayLoggedIn = createAsyncThunk(
  'customer/stayLoggedIn',
  async () => {
    const response = await fetch('/me')
    const data = await response.json()
    console.log("STAYLOGGEDIN", data)
    return data
  }
)

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {
      username: "",
    },
    loggedIn: false,
    isLoading: false,
    hasError: false,
  },
  reducers: {
  },
  extraReducers: {
    [createCustomer.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createCustomer.fulfilled]: (state, { payload }) => {
      state.customer = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [createCustomer.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [stayLoggedIn.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [stayLoggedIn.fulfilled]: (state, { payload }) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.hasError = false;
    },
    [stayLoggedIn.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [customerLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [customerLogin.fulfilled]: (state, { payload }) => {
      state.customer = payload;
      state.loggedIn = true;
      state.isLoading = false;
      state.hasError = false;
    },
    [customerLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {  } = customerSlice.actions 

export default customerSlice.reducer;
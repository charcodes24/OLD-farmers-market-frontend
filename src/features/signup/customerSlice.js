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
              password_confirmation: form.password_confirmation
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
    console.log("ERRORS IN LOG IN", data.errors[0])
    return data 
  }
)

//customer logout 
export const customerLogout = createAsyncThunk(
  'customer/customerLogout',
  async () => {
   const response = await fetch("/logout", {
      method: "DELETE"
   })
    console.log(response)
  }
)

//keep customer logged in 
// export const stayLoggedIn = createAsyncThunk(
//   'customer/stayLoggedIn',
//   async () => {
//     const response = await fetch("/me")
//     const data = await response
//     if (data.ok) {
//       return data.json()
//     } else {
//       console.log("ERRORS IN STAYLOGGED IN")
//     }
//   }
// )

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {
      username: "",
    },
    loggedIn: false,
    isLoading: false,
    hasError: false,
    errors: []
  },
  reducers: {
    stayLoggedIn(state, { payload }) {
      state.customer = payload;
    },
    logInErrors(state, { payload }) {
      if (payload.length > 0) {
        state.errors = payload;
        state.loggedIn = false;
        debugger
      } else {
        state.customer = payload;
        console.log("PAYLOAD", payload.errors);
        state.loggedIn = true;
      }
    },
    logIn(state, { payload }) {
      state.customer = payload
    }
  },
  extraReducers: {
    [createCustomer.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createCustomer.fulfilled]: (state, { payload }) => {
      state.customer = payload;
      state.loggedIn = true;
      state.isLoading = false;
      state.hasError = false;
    },
    [createCustomer.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    // [stayLoggedIn.pending]: (state) => {
    //   state.isLoading = true;
    //   state.hasError = false;
    // },
    // [stayLoggedIn.fulfilled]: (state, { payload }) => {
    //   state.customer = payload;
    //   state.loggedIn = true;
    //   state.isLoading = false;
    //   state.hasError = false;
    // },
    // [stayLoggedIn.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.hasError = true;
    // },
    [customerLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [customerLogin.fulfilled]: (state, { payload }) => {
        if (payload.errors) {
        state.errors = payload;
        state.loggedIn = false;
      } else {
        state.customer = payload;
        console.log("PAYLOAD", payload.errors);
        state.loggedIn = true;
      }
    },
    [customerLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [customerLogout.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [customerLogout.fulfilled]: (state) => {
      console.log('FULFILLED')
      state.customer = {
        username: ""
      };
      state.loggedIn = false;
      state.isLoading = false;
      state.hasError = false;
    },
    [customerLogout.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { stayLoggedIn, setFormData, logInErrors, logIn } = customerSlice.actions 

export default customerSlice.reducer;
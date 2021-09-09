import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

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
      console.log("ERRORS IN SIGN UP", data)
      return data 
    }
)

export const createVendor = createAsyncThunk(
  "vendors/createVendor",
  async (form) => {
    const response = await fetch("/signupvendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        vendor: {
          name: form.name,
          description: form.description,
          username: form.username,
          password: form.password,
          password_confirmation: form.password_confirmation,
          is_vendor: form.is_vendor
        }
      })
    });
    const data = await response.json();
    console.log("CREATE VENDOR", data)
    return data;
  }
);

export const userLogin = createAsyncThunk(
  "allUsers/userLogin",
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

export const userLogout = createAsyncThunk(
    "allUsers, userLogout",
    async () => {
        const response = await fetch(`/logout`, {
            method: "DELETE"
        })
      console.log(response)
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
  reducers: {
    logIn(state, { payload }) {
      if (payload.is_vendor === true) {
        state.vendor = payload;
        state.vendorLoggedIn = true;
      } else {
        state.customer = payload;
        state.customerLoggedIn = true;
      }
    },

    clearErrors(state) {
      state.errors = []
      state.hasError = false
    }
  },
  extraReducers: {
    [createCustomer.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createCustomer.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
        state.customerLoggedIn = false;
        state.vendorLoggedIn = false;
        state.hasError = true;
        state.isLoading = false;
      } else {
        state.customer = payload;
        state.customerLoggedIn = true;
        state.hasError = false;
        state.isLoading = false;
      }
    },
    [createCustomer.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [createVendor.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createVendor.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
        state.vendorLoggedIn = false;
        state.customerLoggedIn = false;
        state.hasError = true;
        state.isLoading = false;
      } else {
        state.vendor = payload;
        state.vendorLoggedIn = true;
        state.hasError = false;
        state.isLoading = false;
      }
    },
    [createVendor.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
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
        state.errors = [];
      } else {
        state.customer = payload;
        state.vendorLoggedIn = false;
        state.customerLoggedIn = true;
        state.hasError = false;
        state.isLoading = false;
        state.errors = [];
      }
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [userLogout.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [userLogout.fulfilled]: (state) => {
      state.customer = {};
      state.vendor = {};
      state.customerLoggedIn = false;
      state.vendorLoggedIn = false;
      state.isLoading = false;
      state.hasError = false;
    },
    [userLogout.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { logIn } = allUsersSlice.actions

export default allUsersSlice.reducer
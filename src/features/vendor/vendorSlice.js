import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//thunk dispatches at most two actions: pending, fulfilled, rejected
export const getVendors = createAsyncThunk(
    'vendors/getVendors',
    async () => {
        const response = await fetch('/vendors')
        const data = await response.json()
        return data
    }
)

export const getItems = createAsyncThunk(
    'vendors/getItems',
    async (id) => {
        const response = await fetch(`/vendors/${id}/items`)
        const data = await response.json()
        console.log('DEBUGGER===', data)
        return data
    }
)

export const createVendor = createAsyncThunk(
  'vendors/createVendor',
  async (form) => {
    const response = await fetch('/signupvendor', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        vendor: {
          name: form.name,
          description: form.description,
          category: form.category,
          username: form.username,
          password: form.password,
          password_confirmation: form.password_confirmation
        }
      })
    })
    const data = await response.json()
    return data
    }
)

//vendor login 
export const vendorLogin = createAsyncThunk(
  'vendors/vendorLogin',
  async (form) => {
    const response = await fetch("/login_vendor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
          username: form.username,
          password: form.password,
      }),
    })
    const data = await response.json()
    console.log("VENDOR LOG IN DATA", data)
    // logInErrors(data)
    return data
  }
)



export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendor: {},
    loggedIn: false,
    vendorList: [],
    items: [],
    itemVendor: {},
    isLoading: false,
    hasError: false,
    errors: [],
  },
  reducers: {
    vendorLogIn(state, { payload }) {
      state.vendor = payload;
      state.loggedIn = true;
    },
    clearErrors(state) {
      state.errors = [];
      state.hasError = false;
    }
  },
  extraReducers: {
    // [createVendor.pending]: (state) => {
    //   state.isLoading = true;
    //   state.hasError = false;
    // },
    // [createVendor.fulfilled]: (state, { payload }) => {
    //   if (payload.errors) {
    //     state.errors = payload.errors;
    //     state.loggedIn = false;
    //     state.hasError = true;
    //     state.isLoading = false;
    //   } else {
    //     state.vendor = payload;
    //     state.loggedIn = true;
    //     state.hasError = false;
    //     state.isLoading = false;
    //   }
    // },
    // [createVendor.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.hasError = true;
    // },
    // [vendorLogin.pending]: (state) => {
    //   state.isLoading = true;
    //   state.hasError = false;
    // },
    // [vendorLogin.fulfilled]: (state, { payload }) => {
    //   if (payload.errors) {
    //     state.errors = payload.errors;
    //     state.loggedIn = false;
    //     state.hasError = true;
    //     state.isLoading = false;
    //   } else {
    //     state.vendor = payload;
    //     console.log("PAYLOAD", payload);
    //     state.loggedIn = true;
    //     state.hasError = false;
    //     state.isLoading = false;
    //   }
    // },
    // [vendorLogin.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.hasError = true;
    // },
    [getVendors.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getVendors.fulfilled]: (state, { payload }) => {
      state.vendorList = payload;
      state.items = [];
      state.itemVendor = {};
      state.isLoading = false;
      state.hasError = false;
    },
    [getVendors.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getItems.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});


//action creators are generated for each case reducer function
export const { clearErrors, vendorLogIn } = vendorSlice.actions;

export default vendorSlice.reducer;

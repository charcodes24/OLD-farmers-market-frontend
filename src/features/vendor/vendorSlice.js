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
    const response = await fetch('/signup', {
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
  }
)



export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendorList: [],
    items: [],
    itemVendor: {},
    isLoading: false,
    hasError: false
  },
  reducers: {
  },
  extraReducers: {
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
      state.itemVendor = payload[0].vendor;
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
export const { clearItems } = vendorSlice.actions;

export default vendorSlice.reducer;

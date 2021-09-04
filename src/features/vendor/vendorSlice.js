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



export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendorList: [],
    items: [],
  },
  extraReducers: {
    [getVendors.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getVendors.fulfilled]: (state, { payload }) => {
      state.vendorList = payload;
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
      state.isLoading = true;
      state.hasError = true;
    },
  },
});


//action creators are generated for each case reducer function
export const {} = vendorSlice.actions;

export default vendorSlice.reducer;

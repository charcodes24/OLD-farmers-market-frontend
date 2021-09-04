import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


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
  name: "vendors",
  initialState: {
    vendorList: [],
    items: [],
  },
  extraReducers: {
    [getVendors.pending]: (state) => {
      state.status = "loading";
    },
    [getVendors.fulfilled]: (state, { payload }) => {
      state.vendorList = payload;
      state.status = "success";
    },
    [getVendors.rejected]: (state) => {
      state.status = "failed";
    },
    [getItems.pending]: (state) => {
      state.status = "loading";
    },
    [getItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = "success";
    },
    [getItems.rejected]: (state) => {
      state.status = "failed";
    },
  },
});


//action creators are generated for each case reducer function
export const {  } = vendorSlice.actions

export default vendorSlice.reducer 
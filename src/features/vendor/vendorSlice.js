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

export const getVendor = createAsyncThunk(
    'vendors/getVendor',
    async (id) => {
        const response = await fetch(`/vendors/${id}`)
        const data = await response.json()
        return data
    }
)


export const vendorSlice = createSlice({
  name: "vendors",
  initialState: {
    vendorList: [],
    vendor: {},
  },
  reducers: {
    getVendor(state, action) {
      return (state.vendor = state.vendorList.find(
        (vendor) => vendor.name === action.payload.name
      ));
    },
    click() {
      console.log(`I've been clicked!`);
    },
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
    [getVendor.pending]: (state) => {
      state.status = "loading";
    },
    [getVendor.fulfilled]: (state, { payload }) => {
      state.vendor = payload;
      state.status = "success";
    },
    [getVendor.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

//action creators are generated for each case reducer function
export const { click } = vendorSlice.actions

export default vendorSlice.reducer 
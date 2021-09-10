import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVendors = createAsyncThunk(
    'vendors/getVendors',
    async () => {
        const response = await fetch('/vendors')
        const data = await response.json()
        return data
    }
)

export const getItems = createAsyncThunk("vendors/getItems", async (id) => {
  const response = await fetch(`/vendors/${id}/items`)
  const data = await response.json()
  console.log("DEBUGGER===", data)
  return data
})

export const addItem = createAsyncThunk(
  "item/addItem",
  async (form) => {
  const response = await fetch("/add_item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      item: {
        name: form.name,
        image_url: form.image_url,
        price: form.price,
        vendor_id: form.vendor_id,
      },
    }),
  });
  const data = await response.json();
  console.log("ADD ITEM data", data);
  return data;
});

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
    },
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
      state.isLoading = false;
      state.hasError = false;
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [addItem.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.items = state.items.push(payload);
      state.isLoading = false;
      state.hasError = false;
    },
    [addItem.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});


//action creators are generated for each case reducer function
export const { clearErrors, vendorLogIn } = vendorSlice.actions;

export default vendorSlice.reducer;

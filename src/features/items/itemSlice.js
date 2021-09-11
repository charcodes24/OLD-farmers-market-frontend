import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//add new item
export const addItem = createAsyncThunk("item/addItem", async (form) => {
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
  console.log("ADDING ITEM", data);
  return data;
});

export const getItems = createAsyncThunk("vendors/getItems", async (id) => {
  const response = await fetch(`/vendors/${id}/items`);
  const data = await response.json();
  console.log("DEBUGGER===", data);
  debugger;
  return data;
});

// export const increasePrice = createAsyncThunk(
//   "items/increasePrice",
//   async (item) => {
//     debugger;
//     const response = await fetch(`/items/${item.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         price: parseFloat((item.price += 1)),
//       }),
//     });
//     debugger;
//     const data = await response.json();
//     debugger;
//     console.log(data);
//     return data;
//   }
// );

export const deleteItem = createAsyncThunk(
  "allUsers, userLogout",
  async (id) => {
  const response = await fetch(`/items/${id}`, {
    method: "DELETE",
  });
  console.log(response);
});

const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: {},
    items: [],
    isLoading: false,
    hasError: false,
    errors: [],
    vendor: {},
  },
  reducers: {
    increasePrice(state, { payload }) {
      const item = state.items.find((item) => item.id === payload.id);
      state.item = item;
      state.item.price = state.item.price += 1;
    },
    decreasePrice(state, { payload }) {
      const item = state.items.find((item) => item.id === payload.id);
      state.item = item;
      state.item.price = state.item.price -= 1;
    },
  },
  extraReducers: {
    [addItem.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
        state.hasError = true;
      } else {
        state.items = state.items + payload;
        state.isLoading = false;
        state.hasError = false;
      }
    },
    [addItem.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getItems.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getItems.fulfilled]: (state, { payload }) => {
      if (payload[0]) {
        state.items = payload;
        state.vendor = payload[0].vendor;
        state.isLoading = false;
        state.hasError = false;
      } else {
        state.items = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    // [increasePrice.pending]: (state) => {
    //   state.isLoading = true;
    //   state.hasError = false;
    // },
    // [increasePrice.fulfilled]: (state, { payload }) => {
    //   state.item.price = payload;
    //   state.customerLoggedIn = false;
    //   state.vendorLoggedIn = false;
    //   state.isLoading = false;
    //   state.hasError = false;
    // },
    // [increasePrice.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.hasError = true;
    // },
    [getItems.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getItems.fulfilled]: (state, { payload }) => {
      if (payload[0]) {
        state.items = payload;
        state.vendor = payload[0].vendor;
        state.isLoading = false;
        state.hasError = false;
      } else {
        state.items = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { increasePrice, decreasePrice } = itemSlice.actions;

export default itemSlice.reducer;

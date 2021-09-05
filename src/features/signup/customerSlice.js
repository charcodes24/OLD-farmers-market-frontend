import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
            customer: {username: form.username,
            password: form.password,
            password_confirmation: form.password_confirmation}
            })
        })
        const data = await response.json()
        return data 
    }
)




export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {
      customerLogin(state, { payload }) {
        state.customer = payload
      }
  },
  extraReducers: {
    [createCustomer.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createCustomer.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [createCustomer.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { customerLogin } = customerSlice.actions 

export default customerSlice.reducer;
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
            customer: {
              username: form.username,
              password: form.password,
              password: form.password_confirmation
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




export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {
      username: "",
    },
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
      state.customer = payload
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
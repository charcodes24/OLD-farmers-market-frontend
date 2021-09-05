import { configureStore } from "@reduxjs/toolkit"
import vendorReducer from '../features/vendor/vendorSlice'
import customerReducer from '../features/signup/customerSlice'



const store = configureStore({
    reducer: {
    vendor: vendorReducer,
    customer: customerReducer
  },
})


export default store 
import { configureStore } from "@reduxjs/toolkit"
import vendorReducer from '../features/vendor/vendorSlice'
import customerReducer from '../features/signup/customerSlice'
import itemReducer from '../features/items/itemSlice'



const store = configureStore({
    reducer: {
    vendor: vendorReducer,
    customer: customerReducer,
    item: itemReducer
  },
})


export default store 
import { configureStore } from "@reduxjs/toolkit"
import vendorReducer from '../features/vendor/vendorSlice'
import customerReducer from '../features/customer/customerSlice'
import itemReducer from '../features/items/itemSlice'
import allUsersReducer from "../features/allUsers/AllUsersSlice"



const store = configureStore({
    reducer: {
    vendor: vendorReducer,
    customer: customerReducer,
    item: itemReducer,
    allusers: allUsersReducer 
  },
})


export default store 
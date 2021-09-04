import { configureStore } from "@reduxjs/toolkit"
import vendorReducer from '../features/vendor/vendorSlice'


export default configureStore({
    reducer: {
      vendor: vendorReducer
  },
})

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../features/vendor/vendorSlice";

import About from "./About";
import VendorCard from './VendorCard'
import Loading from "./Loading";

export default function HomePage() {
  const vendors = useSelector(state => state.vendor.vendorList)
  const isLoading = useSelector(state => state.vendor.isLoading)
  const dispatch = useDispatch();

  console.log('HomePage', vendors)

  const displayVendors = vendors.map((vendor) => {
    return (
      <VendorCard
        key={vendor.id}
        vendor={vendor}
      />
    )
  })

  useEffect(() => {
    dispatch(getVendors())
  }, []);

  { 
    return isLoading ? <Loading /> : (
      <div>
        <h1>Welcome to the Farmer's Market</h1>
        <About />
        <div>{displayVendors}</div>
      </div>
    )
  }

}
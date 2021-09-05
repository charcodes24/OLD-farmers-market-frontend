import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../features/vendor/vendorSlice";

import About from "./About";
import VendorCard from './VendorCard'

export default function HomePage() {
    const vendors = useSelector(state=> state.vendor.vendorList)
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

  return (
    <div>
      <h1>Welcome to the Farmer's Market</h1>
      <About />
      <div>{displayVendors}</div>
    </div>
  );
}

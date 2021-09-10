import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../features/vendor/vendorSlice";
import { clearErrors } from "../features/customer/customerSlice";

import About from "./About";
import VendorCard from './VendorCard'
import Loading from "./Loading";

export default function HomePage() {
  const vendors = useSelector(state => state.vendor.vendorList)
  const isLoading = useSelector(state => state.vendor.isLoading)
  const customer = useSelector(state => state.allusers.customer.username)
  const dispatch = useDispatch();

  // {customer ? customer.charAt(0).toUpperCase() + customer.substring(1) : null}

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
    dispatch(clearErrors())
  }, []);

  { 
    return isLoading ? (
      <Loading />
    ) : (
      <div className="container">
        <div className="hero">
          <h1>
            Welcome to the Farmer's Market{" "}
            {customer
              ? customer.charAt(0).toUpperCase() + customer.substring(1)
              : null}
          </h1>
          <About />
        </div>
        <div>
          <div>{displayVendors}</div>
        </div>
      </div>
    );
  }

}
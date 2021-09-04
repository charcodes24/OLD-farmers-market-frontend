import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getVendor } from "../features/vendor/vendorSlice"


export default function VendorPage() {
    const { id } = useParams()
    const vendor = useSelector(state => state = state.vendor.vendor)
    const dispatch = useDispatch()
    // const newName = name.replaceAll('_', ' ')

    useEffect(() => {
        dispatch(getVendor(`${id}`))
    }, []);

    console.log('VendorPage', vendor)


    return (
      <div>
            <h1>{vendor.name}</h1>
            <p>{vendor.description}</p>
      </div>
    );
}
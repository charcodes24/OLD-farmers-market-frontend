import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getItems } from "../features/vendor/vendorSlice"

import Item from "./Item"


export default function VendorPage() {
    const { id } = useParams()
    const items = useSelector((state) => state.vendor.items)
    const vendor = useSelector((state) => state.vendor.itemVendor)
    const isLoading = useSelector((state) => state.vendor.isLoading)
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(getItems(`${id}`))
    }, [dispatch]);

    const displayItems = items.map((item) => {
        return (
            <Item
                key={item.id}
                item={item}
            />
        )
    })

    return (
      <div>
            <h1>{vendor.name}</h1>
            {displayItems}
      </div>
    );
    
}
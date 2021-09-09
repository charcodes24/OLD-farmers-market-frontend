import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getItems } from "../features/vendor/vendorSlice"

import Item from "./Item"
import Loading from "./Loading"

export default function VendorPage() {
  const { id } = useParams()
  const isLoading = useSelector((state) => state.vendor.isLoading)
  const items = useSelector((state) => state.vendor.items)
  const vendor = useSelector((state) => state.vendor.vendor)
  const dispatch = useDispatch()
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

  console.log("CFLS", cartFromLocalStorage)
  console.log("VP", items)
  console.log("VP", vendor)

    useEffect(() => {
        dispatch(getItems(`${id}`))
    }, [id])
  
  useEffect(() => {
    
  }, []);

    const displayItems = items.map((item) => {
        return (
            <Item
                key={item.id}
                item={item}
            />
        )
    })

    {
        return isLoading ? (
          <Loading />
        ) : (
          <div>
            <h1>{vendor.name}</h1>
            {(items.length > 0) ? displayItems : <h3>This vendor has no items yet.</h3>}
          </div>
        );
    }
    
}
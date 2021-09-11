import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

import { getItems } from "../features/vendor/vendorSlice"

import Item from "./ItemVendor"
import Loading from "./Loading"

export default function VendorPage({ addItemToCart }) {
  const { id } = useParams()
  const isLoading = useSelector((state) => state.vendor.isLoading)
  const items = useSelector((state) => state.item.items)
  const vendor = useSelector((state) => state.item.vendor)
  const { name, description } = vendor
  const dispatch = useDispatch()

  console.log("VP items", items)
  console.log("VP vendor", vendor)

    useEffect(() => {
        dispatch(getItems(`${id}`))
    }, [id])

    const displayItems = items.map((item) => {
        return (
            <Item
                key={item.id}
                item={item}
                addItemToCart={addItemToCart}
            />
        )
    })

    {
        return isLoading ? (
          <Loading />
        ) : (
          <div>
              <h1>{name}</h1>
              <p>{description}</p>
            {(items.length > 0) ? displayItems : <h3>This vendor has no items yet.</h3>}
          </div>
        );
    }
    
}
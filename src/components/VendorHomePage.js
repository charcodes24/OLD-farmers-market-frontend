import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getItems } from "../features/vendor/vendorSlice"

import AddItem from "./AddItem"
import Loading from "./Loading"
import Item from "./Item"

export default function VendorHomePage() {
  const dispatch = useDispatch()
  // const items = useSelector(state => state.item.items)
  const vendor = useSelector(state => state.allusers.vendor)
  const { id, name, description, items } = vendor
  const isLoading = useSelector((state) => state.vendor.isLoading);

  console.log("VENDOR", vendor)

  useEffect(() => {
    dispatch(getItems(`${id}`));
  }, [id]);

  // const displayItems = items.map((item) => {
  //   return <Item key={item.id} item={item} />;
  // });

  // function displayItems(items) {
  //   if (items.length > 0) {
  //     const displayItems = items.map((item) => {
  //         return <Item key={item.id} item={item} />
  //     })
  //     return displayItems
  //   } else {
  //     return null
  //   }
  // }

  {
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <div>
          <h1>Welcome {name}!</h1>
          <AddItem />
        </div>
        {/* {displayItems(items)} */}
      </div>
    );
  }
    
}
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getItems } from "../features/vendor/vendorSlice"

import AddItem from "./AddItem"
import Loading from "./Loading"
import Item from "./Item"

export default function VendorHomePage() {
  const dispatch = useDispatch()
  const vendor = useSelector(state => state.vendor.vendor)
  const { id, name, description, items } = vendor
  const isLoading = useSelector((state) => state.vendor.isLoading);

  useEffect(() => {
    dispatch(getItems(`${id}`));
  }, [id]);

  const displayItems = items.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  {
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <div>
          <h1>Welcome {vendor.name}!</h1>
          <AddItem />
        </div>
        {displayItems}
      </div>
    );
  }
    
}
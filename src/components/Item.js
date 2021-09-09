import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

export default function Item({ item }) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const cartItem = useSelector(state => state.cart.item)
  const vendor = useSelector(state => state.item.items[0].vendor.name)
  const { name, image_url, price } = item
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")


  console.log("CFLS", cartFromLocalStorage)
  console.log("ITEM COMP, vendor", vendor)
  console.log("ITEM COMP, cart", cart.cart)
  console.log("ITEM TO PASS TO ADD TO CART", item)
  console.log("CARTITEM", cartItem  )

  function addItemToCart(e) {
    e.preventDefault();
    dispatch(addItem(item))
  }
  
    return (
      <div>
        <img src={image_url} />
        <h3>{name}</h3>
        <p>${price}</p>
            <button onClick={addItemToCart}>Add Item</button>
      </div>
    );
}
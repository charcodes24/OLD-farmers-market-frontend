import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { clearCart } from "../features/cart/CartSlice"

import ItemCart from "./ItemCart"

export default function Cart({ cart, removeItem, clearCart }) {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    console.log("CART ITEMS", cartItems)

    const handleClearCart = (e) => {
        e.preventDefault()
        clearCart()
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart?.map((item) => {
                return (
                    <ItemCart
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                    />
                )
            })}
            <button>Checkout</button>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    )
}
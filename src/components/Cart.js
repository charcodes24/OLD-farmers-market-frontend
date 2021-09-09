import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ItemCart from "./ItemCart"

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    console.log("CART ITEMS", cartItems)

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.map((item) => {
                return (
                    <ItemCart
                        key={item.id}
                        item={item}
                    />
                )
            })}
            <button>Checkout</button>
            <button>Clear Cart</button>
        </div>
    )
}
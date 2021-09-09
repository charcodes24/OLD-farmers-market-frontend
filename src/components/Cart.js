import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems.cartItems.cartItems)
    const dispatch = useDispatch()


    console.log(cartItems)




    return (
        <div>
            <h1>Cart</h1>
            {cartItems.map((item) => {
                return (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.cartQuantity}</p>
                        <button>Remove Item</button>
                    </div>
                )
            })}
            <button>Checkout</button>
            <button>Clear Cart</button>
        </div>
    )
}
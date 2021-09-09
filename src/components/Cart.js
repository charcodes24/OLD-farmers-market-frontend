
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    const cartIems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()



    return (
        <div>
            <h1>Cart</h1>
            {cartIems.map((item) => {
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
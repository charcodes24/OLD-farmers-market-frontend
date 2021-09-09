import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { removeItem } from "../features/cart/CartSlice"


export default function ItemCart({ item }) {
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const { name, price, quantity } = item

    console.log(item)
    function handleRemoveItem(e) {
        e.preventDefault()
        dispatch(removeItem(item))
    }

    return (
        <div>
            <p>Item: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={handleRemoveItem}>Remove Item</button>
        </div>
    )
}
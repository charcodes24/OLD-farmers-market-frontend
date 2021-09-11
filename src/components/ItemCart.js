import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { removeItem } from "../features/cart/CartSlice"


export default function ItemCart({ item, removeItem }) {
    const dispatch = useDispatch()
    const { id, name, price, quantity } = item

    console.log(item)
    // function handleRemoveItem(e) {
    //     e.preventDefault()
    //     dispatch(removeItem(item))
    // }

    const handleRemoveItem = (e) => {
        e.preventDefault()
        removeItem(id)
    }

    return (
        <div>
            <p>Item: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={(e) => handleRemoveItem(e)}>Remove Item</button>
        </div>
    )
}
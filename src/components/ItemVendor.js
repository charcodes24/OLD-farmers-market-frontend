import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../features/cart/CartSlice";

import { increasePrice, decreasePrice } from "../features/items/itemSlice";

export default function Item({ item, addItemToCart }) {
  const dispatch = useDispatch()
  const { id, name, image_url, price } = item
  

  function handleAddItem(e) {
    e.preventDefault()
    addItemToCart(item)
  }

  function handleItemUpdate(e) {
    e.preventDefault()
    debugger
    fetch(`/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: item.price,
      }),
    }).then((r) => {
      if (r.ok) {
        debugger
        console.log('ok')
      } else {
        debugger
        r.json().then((err) =>
          console.log(err))
      }
    });
  }

  function handleIncreasePrice(e) {
    e.preventDefault()
    dispatch(increasePrice(item))
  }

  function handleDecreasePrice(e) {
    e.preventDefault()
    dispatch(decreasePrice(item))
  }
  
    return (
      <div>
        <img src={image_url} />
        <h3>{name}</h3>
        <p>${price}</p>
        <button onClick={handleAddItem}>Delete Item</button>
        <button onClick={handleIncreasePrice}>IncreasePrice</button>
        <button onClick={handleDecreasePrice}>Decrease Price</button>
        <button onClick={handleItemUpdate}>Update Button</button>
      </div>
    );
}
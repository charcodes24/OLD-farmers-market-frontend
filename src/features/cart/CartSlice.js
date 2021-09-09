import { createSlice } from "@reduxjs/toolkit"


const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: cartFromLocalStorage,
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addItem(state, { payload }) {
            const existingItem = state.cartItems.find(item => item.id === payload.id)
            if (!existingItem) {
                state.cartItems.push({ id: payload.id, name: payload.name, price: payload.price, quantity: 1 })
                localStorage.setItem("cart", JSON.stringify(state.cartItems))
            } else {
                existingItem.quantity++
                state.cartTotalQuantity++
                state.cartTotalAmount += payload.price
            }
            // const itemIndex = state.cartItems.findIndex( item => item.id === payload.id)
            // if (itemIndex >= 0) {
            //     state.cartItems[itemIndex].cartQuantity += 1
            // } else {
            //     const tempProduct = { ...payload, cartQuantity: 1 }
            //     state.cartItems.push(tempProduct);
            // }
            // state.cartTotalQuantity = state.cartTotalQuantity++
            // state.cartTotalAmount += payload.price
        }
    },
    removeItem(state, { payload }) {
        const updatedCart = state.cartItems.filter(item => item.id !== payload.id)
        debugger
        state.cartItems = updatedCart
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    extraReducers: {}
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit"


// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addItem(state, { payload }) {
            const existingItem = state.cartItems.find(item => item.id === payload.id)
            if (!existingItem) {
                state.cartItems.push({ id: payload.id, name: payload.name, price: payload.price, quantity: 1 })
                // localStorage.setItem("cart", JSON.stringify(state.cartItems))
            } else {
                existingItem.quantity++
                state.cartTotalQuantity++
                state.cartTotalAmount += payload.price
                // localStorage.setItem("cart", JSON.stringify(state.cartItems))
            }
        }
    },
    removeItem(state, { payload }) {
        //check array of items and know how many items we have and take id and check to see if id is present in array
        //if id present > remove item from array 
        const updatedCart = state.cartItems.filter(item => item.id !== payload.id)
        state.cartItems = updatedCart
        // localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    clearCart(state) {
        state.cartItems = []
        // localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    extraReducers: {}
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
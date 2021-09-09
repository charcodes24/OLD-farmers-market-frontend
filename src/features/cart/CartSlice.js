import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addItem(state, { payload }) {
            const itemIndex = state.cartItems.findIndex( item => item.id === payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
            }
            state.cartTotalQuantity = state.cartTotalQuantity++
            state.cartTotalAmount += payload.price
        }
    },
    extraReducers: {}
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
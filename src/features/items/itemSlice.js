import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//add new item
export const addItem = createAsyncThunk(
    'item/addItem',
    async (form) => {
        const response = await fetch('/add_item', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                item: {
                    name: form.name,
                    image_url: form.image_url,
                    price: form.price,
                    vendor_id: form.vendor_id
                }
            })
        })
        const data = await response.json()
        console.log(data)
        return data
    }
)

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        item: {},
        items: [],
        isLoading: false,
        hasError: false,
        errors: [],
        vendor: {}
    },
    reducers: {},
    extraReducers: {}
})

export default itemSlice.reducer
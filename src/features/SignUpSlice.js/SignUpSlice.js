import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
    'signup/signUp',
    async (data) => {
        const response = await fetch('/signup')
        const data = await response.json()
        return data 
    }
)




export const signUpSlice = createSlice({
    name: 'signup',
    initialState: {
        username: "",
        password: "",
        confirmation: "",
        isLoading: false,
        hasError: false 
    },
    reducers: {},
})
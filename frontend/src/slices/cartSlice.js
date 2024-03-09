//! because we have endpoint that is not dealing with asynchronous requests
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
});

export default cartSlice.reducer;
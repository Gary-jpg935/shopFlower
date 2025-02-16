import { products } from "../../Utils/Products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: products
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
})

export const {} = productsSlice.actions

export default productsSlice.reducer
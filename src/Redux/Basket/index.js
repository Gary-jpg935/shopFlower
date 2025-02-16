import { createSlice } from "@reduxjs/toolkit"
import { items } from "../../Utils/BasketProducts"

const initialState = {
    items: items
}

export const basketProductsSlice = createSlice({
    name: "items",
    initialState
})

export const {} = basketProductsSlice.actions

export default basketProductsSlice.reducer
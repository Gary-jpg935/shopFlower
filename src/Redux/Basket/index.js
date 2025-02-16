import { createSlice } from "@reduxjs/toolkit"
import { items } from "../../Utils/BasketProducts"

const initialState = {
    items: items
}

export const basketProductsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            state.items = state.items.filter((elem) => elem.id !== action.payload.id)
        },
        deleteAllProducts: (state) => {
            state.items = []
        },
        setAllProducts: (state, action) => {
            state.items = action.payload
        },
        setCountPlus: (state, action) => {
            state.items = state.items.map((elem) => {
                if(action.payload.id === elem.id) {
                    elem.total = elem.total + 1
                }
                return elem
            })
        },
        setCountMinus: (state, action) => {
            state.items = state.items.map((elem) => {
                if(action.payload.id === elem.id && elem.total > 1) {
                    elem.total = elem.total - 1
                }
                return elem
            })
        }
    }
})

export const {deleteProduct, deleteAllProducts, setAllProducts, setCountPlus, setCountMinus} = basketProductsSlice.actions

export default basketProductsSlice.reducer
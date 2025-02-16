import { configureStore } from '@reduxjs/toolkit'
import productsSlice  from './Product'
import basketProductsSlice from './Basket'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    basketProducts: basketProductsSlice
  },
})


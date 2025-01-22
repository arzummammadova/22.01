import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productsSlice.js'
import basketReducer from '../features/basketSlice.js'
export const store = configureStore({
  reducer: {
    products:productReducer,
    basket:basketReducer
  },
})
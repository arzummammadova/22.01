import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios("http://localhost:5000/api/products")
      return response.data
    },
  )
  export const deleteProducts = createAsyncThunk(
    'products/deleteProducts',
    async (id) => {
      const response = await axios.delete(`http://localhost:5000/api/products/${id}`)
      return response.data
    },
  )
  export const createProducts = createAsyncThunk(
    'products/createProducts',
    async (newProduct) => {
      const response = await axios.post(`http://localhost:5000/api/products`,newProduct)
      return response.data
    },
  )

  export const sortlowtoHigh = createAsyncThunk(
    'products/sortlowtoHigh',
    async () => {
      const response = await axios(`http://localhost:5000/api/products`)
      const sorted= response.data.sort((a,b)=>a.price-b.price)
      return sorted
    },
  )


const initialState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products=action.payload
    })
    .addCase(deleteProducts.fulfilled, (state, action) => {
      state.products=state.products.filter((product)=>product._id!==action.payload._id)
    })

    .addCase(createProducts.fulfilled, (state, action) => {
      state.products.push(action.payload)
    })

    .addCase(sortlowtoHigh.fulfilled, (state, action) => {
      state.products=action.payload
    })

  },
})


export default productsSlice.reducer
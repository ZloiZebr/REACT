import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getProducts = createAsyncThunk(
    'cart/getProducts',
    async () => {
        const response = await axios.get('http://localhost:3000/products')
        return response.data
    }
)

export const addProduct = createAsyncThunk(
    'cart/addProduct',
    async (newProduct) => {
        const response = await axios.post('http://localhost:3000/products', newProduct)
        return response.data
    }
)

export const deleteProduct = createAsyncThunk(
    'cart/deleteProduct',
    async (productId) => {
        await axios.delete(`http://localhost:3000/products/${productId}`)
        return productId
    }
)

const initialState = {
    products: [],
    total: 0,
    productsStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    productsErrors: null,
    addProductsStatus: 'idle', // 'idle' |  'adding' | 'succeeded' | 'failed'
    addProductsErrors: null,
    deleteProductStatus: 'idle', // 'idle' |  'deleting' | 'succeeded' | 'failed'
    deleteProductsErrors: null,

}

const cartSliceHW11 = createSlice({
    name: 'cartHW11',
    initialState,
    extraReducers: (builder) => {
        builder
        // getProducts
            .addCase(getProducts.pending, state => {
                state.productsStatus = 'loading'
                state.productsErrors = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = 'succeeded'

                const loadedProducts = action.payload
                state.products = [...loadedProducts]
                state.total = loadedProducts.reduce((total, product) => total + product.quantity, 0)
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = 'failed'
                state.productsErrors = action.error.message
            })
            // addProduct
            .addCase(addProduct.pending, state => {
                state.addProductStatus = 'adding'
                state.addProductErrors = null
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.addProductStatus = 'succeeded'

                const newProduct = action.payload
                state.products.push(newProduct)
                state.total += newProduct.quantity
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.addProductStatus = 'failed'
                state.addProductErrors = action.error.message
            })
            // deleteProduct
            .addCase(deleteProduct.pending, state => {
                state.deleteProductStatus = 'deleting'
                state.deleteProductErrors = null
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteProductStatus = 'succeeded'

                const idOfDeletedProduct = action.payload
                state.products = state.products.filter(product => product.id !== idOfDeletedProduct)
                state.total = state.products.reduce((total, product) => total + product.quantity, 0)
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.deleteProductStatus = 'failed'
                state.deleteProductErrors = action.error.message
            })
    }
})

export default cartSliceHW11.reducer

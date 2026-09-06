import { createReducer } from '@reduxjs/toolkit'
import { fetchPosts } from './thunks.js'


const initialState = {
    list: [],
    loading: false, // 'true' | 'false' 
    error: null,
}

const postsReducer = createReducer(initialState, (builder) =>
    {
        builder
        .addCase(fetchPosts.pending, state => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false

            const loadedPosts = action.payload
            state.list = [...loadedPosts]
            

        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
)

export default postsReducer


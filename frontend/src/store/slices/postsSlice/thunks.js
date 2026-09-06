import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get('http://localhost:3000/posts')
        return response.data
    }
)


import { configureStore } from '@reduxjs/toolkit'

import countReducer from './reducers/countReducer.js'
import tasksReducer from './reducers/tasksReducer.js'
import cartReducer from './slices/cartSlice.js'

const store = configureStore({
    reducer: {
        countStorage: countReducer,
        tasksStorage: tasksReducer,
        cart: cartReducer
    }
})

export default store
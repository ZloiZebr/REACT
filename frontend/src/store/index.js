import { configureStore } from '@reduxjs/toolkit'

import countReducer from './reducers/countReducer.js'
import tasksReducer from './reducers/tasksReducer.js'
import cartReducer from './slices/cartSlice.js'
import cartReducerHW11 from './slices/cartSliceHW11.js'

const store = configureStore({
    reducer: {
        countStorage: countReducer,
        tasksStorage: tasksReducer,
        cart: cartReducer,
        cartHW11: cartReducerHW11
    }
})

export default store
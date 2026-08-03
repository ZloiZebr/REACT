import { configureStore } from '@reduxjs/toolkit'

import countReducer from './reducers/countReducer.js'
import tasksReducer from './reducers/tasksReducer.js'

const store = configureStore({
    reducer: {
        countStorage: countReducer,
        tasksStorage: tasksReducer
    }
})

export default store
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const checkItem = state.items.find(item => item.name.lower === newItem.name.lower)
            if (checkItem) {
                checkItem.quantity += 1
            } else {
                state.items.push(newItem)
            }
            state.total += 1
        },
        removeItem: (state, action) => {
            const itemToDelete = action.payload
            const checkDeleteItem = state.items.find(item => item.name === itemToDelete.name)
            if (checkDeleteItem) {
                if (checkDeleteItem.quantity === 1) {
                    state.items = state.items.filter(item => item !== checkDeleteItem)
                } else {
                    checkDeleteItem.quantity -= 1
                }
            }
            state.total -= 1
        },
        clearCart: (state, action) => {
            state.items = []
            state.total = 0
        }
    }
})

export const { addItem: createAddItemAction, removeItem: createRemoveItemAction, clearCart: createClearCartAction } = cartSlice.actions


export default cartSlice.reducer

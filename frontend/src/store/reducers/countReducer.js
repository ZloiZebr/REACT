const countInitialState = {
    count: 0
}

const countReducer = (state = countInitialState, action) => {  
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload }

        case "DECREMENT":
            return { ...state, count: state.count - action.payload }

        case "RESET":
            return { ...state, count: action.payload }

        default:
        return state
    }
}


export default countReducer

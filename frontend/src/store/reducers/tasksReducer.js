const tasksInitialState = {
    tasks: []
}

const tasksReducer = (state = tasksInitialState, action) => {  
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] }

        case "DELETE_TASK":
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }

        case "TOGGLE_TASK":
            return { ...state, tasks: state.tasks.map(task => task.id !== action.payload ? task : { ...task, completed: !task.completed }) }

        case "CLEAR_COMPLETED":
            return { ...state, tasks: state.tasks.filter(task => !task.completed) }

        default:
        return state
    }
}


export default tasksReducer

import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";


const initState = {
    todos: [],
    totoInput: '',
}


function reducer(state,action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            break;
    }
}

export {
    initState
}
export default reducer
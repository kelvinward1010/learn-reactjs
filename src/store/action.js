import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";


export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = (payload) => ({
    type: ADD_TODO_INPUT,
    payload
})
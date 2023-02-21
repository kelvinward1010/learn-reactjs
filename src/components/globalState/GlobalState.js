import React, { useContext } from 'react'
import { actions, StoreContext, useStore } from '../../store'

function GlobalState() {

    const [state, dispatch]= useStore()

    console.log(state.todos)

    const handleAdd = () => {
        dispatch(actions.addTodo(state.todoInput))
    }

    return (
        <div>
            <input
                type={'text'}
                value={state.todoInput}
                placeholder={'Enter todo...'}
                onChange={e =>{
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <br/>
            <div>
                <ul>
                    {state.todos?.map((item,idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GlobalState
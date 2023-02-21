import React, { useReducer, useState } from 'react'


//init
const initState = 0;

//Acction
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state,action) => {
    console.log('reducer running...')
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION: 
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function Reducer() {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div style={{padding:'10px 30px'}}>
            <h1>{count}</h1>
            <button
                //onClick={() => setCount(count -1)}
                onClick={() => dispatch(DOWN_ACTION)}
            >Down</button>
            <button
                //onClick={() => setCount(count +1)}
                onClick={() => dispatch(UP_ACTION)}
            >Up</button>
        </div>
    )
}

export default Reducer
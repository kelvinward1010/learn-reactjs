import React, { useState } from 'react'
import Cnt from './Cnt'


// tránh render không cần thiết

function Memo() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)

    const increase = () => {
        setCount(count +1)
    }

    const decrease = () => {
        setCount2(count2-1)
    }

    return (
        <div style={{padding: '10px 30px'}}>
            <Cnt count={count}/>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Click Up</button>
            <button onClick={decrease}>Click Down</button>
        </div>
    )
}

export default Memo
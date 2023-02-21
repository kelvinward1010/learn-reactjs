import React from 'react'

function Cnt({onIncrease}) {
    console.log('re-render')
    return (
        <>
            <h2>CNT</h2>
            <button onClick={onIncrease}>Click Up</button>
        </>
    )
}

export default Cnt
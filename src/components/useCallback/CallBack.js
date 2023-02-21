import React, { useCallback, useState } from 'react'
import Cnt from './Cnt'

function CallBack() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div style={{padding: '10px 30px'}}>
            <Cnt onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default CallBack
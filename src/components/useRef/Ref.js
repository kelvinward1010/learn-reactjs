import React, { useEffect, useRef, useState } from 'react'

function Ref() {

    const [count, setCount] = useState(60)

    // const ref = useRef(99)
    // console.log(ref.current)

    const timerID = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    },[count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()

        console.log(rect)
    })

    const handleStart = () => {
        timerID.current = setInterval(() => {
            // ref.current = Math.random()
            setCount(preCount => preCount -1)
        }, 1000)

        console.log('time', timerID.current)
    }

    const handleStop = () => {
        clearInterval(timerID.current)
        console.log('time clear', timerID.current)
    }

    console.log(count, prevCount.current)

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Ref
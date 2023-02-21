import React, { useEffect, useLayoutEffect, useState } from 'react'

// useEffect 
// 1. Cập nhật lại State
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi clean up nếu deps change
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại State
// 2. Cập nhật DOM (mutated)
// 3. Gọi clean up nếu deps change
// 4. Gọi useEffect callback
// 5. Render lại UI


function LayoutEffect() {

    const [count, setCount] = useState(0)

    const handleRun = () => {
        setCount(count +1)
    }

    useLayoutEffect(() => {
        if(count > 3) setCount(0)
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleRun}
            >
                Run
            </button>
        </div>
    )
}

export default LayoutEffect
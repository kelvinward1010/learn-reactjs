import React, { useState } from 'react'
import Cnt from './Cnt'

function Mount() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Cnt />}
        </div>
    )
}

export default Mount
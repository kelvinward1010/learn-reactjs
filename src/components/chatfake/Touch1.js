import React, { useState } from 'react'
import ChatFake from './ChatFake'

function Touch1() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>Touch</button>
            {show && <ChatFake />}
        </div>
    )
}

export default Touch1
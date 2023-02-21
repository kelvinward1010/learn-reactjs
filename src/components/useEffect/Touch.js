import React, { useState } from 'react'
import Effect from './Effect'
import Effect2 from './Effect2'
import Effect3 from './Effect3'
import EffectAvt from './EffectAvt'
import EffectDom from './EffectDom'
import EffectTime from './EffectTime'

function Touch() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>Touch</button>
            {show && <EffectAvt />}
        </div>
    )
}

export default Touch
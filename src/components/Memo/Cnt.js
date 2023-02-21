import React, { memo } from 'react'

function Cnt({count}) {
    console.log('cnt')
    return (
        <div>Cnt - {count}</div>
    )
}

export default memo(Cnt)
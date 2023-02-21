import React, { useEffect, useState } from 'react'

function EffectTime() {

    const [countDown, setcountDown] = useState(180)

    useEffect(() => {
        const timeId = setInterval(() => {
            setcountDown(prevState =>prevState -1)
        }, 2000);

        return () => clearInterval(timeId)
    },[])

    return (
        <div>
            <p>{countDown}</p>
        </div>
    )
}

export default EffectTime
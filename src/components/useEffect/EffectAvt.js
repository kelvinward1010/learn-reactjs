import React, { useEffect, useState } from 'react'

function EffectAvt() {

    const [avt, setavt] = useState()

    const handlePreviewAvt = (e) => {
        const file = e.target.files[0]
        //console.log(URL.createObjectURL(file))
        file.preview = URL.createObjectURL(file)
        setavt(file)
    }

    useEffect(() => {
        //cleanup
        return () => {
            URL.revokeObjectURL(avt?.preview)
        }
    },[avt])

    return (
        <div>
            <input
                type={'file'}
                onChange={handlePreviewAvt}
            />
            {avt && (
                <img src={avt.preview} alt='' width={300} height={300} />
            )}
        </div>
    )
}

export default EffectAvt
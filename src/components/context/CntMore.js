import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function CntMore() {

    const context = useContext(ThemeContext)

    return (
        <div>
            <p className={context.theme}>Content here!</p>
        </div>
    )
}

export default CntMore
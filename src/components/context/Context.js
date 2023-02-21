import React, { createContext, useContext, useState } from 'react'
import Cnt from './Cnt'
import { ThemeContext } from './ThemeContext'

// 1.create context
// 2. Provider
// 3.Custumer

// export const ThemeContext = createContext()


function Context() {

    // const [theme, setTheme] = useState('dark')

    // const handleTheme = () => {
    //     setTheme(theme ==='dark' ?'light':'dark')
    // }

    const handleContext = useContext(ThemeContext)

    return (
        <div style={{padding:20}}>
            <button onClick={handleContext.handleTheme}>Theme</button>
            <Cnt/>
        </div>
    )
}

export default Context
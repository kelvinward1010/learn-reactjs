import { createContext, useState } from "react";


const ThemeContext = createContext();

function ThemeProvider({children,...props}) {

    const [theme, setTheme] = useState('dark')

    const handleTheme = () => {
        setTheme(theme ==='dark' ?'light':'dark')
    }

    const vl = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={vl}>
            {children}
        </ThemeContext.Provider>
    )
}


export {
    ThemeContext,
    ThemeProvider
}
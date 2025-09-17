// import React, { useState, useContext, createContext } from 'react'

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     }

//     return (
//         <ThemeContext value={{ theme, toggleTheme }}>
//             <div className={`app-theme-${theme}`}>{children}</div>
//         </ThemeContext>
//     )
// }

// const ThemeSwitcher = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     return (
//         <button onClick={toggleTheme}>
//             Switch to {theme === "light" ? "dark" : "light"} mode
//         </button>
//     )
// }

// export { ThemeSwitcher, ThemeContext, ThemeProvider }

import React, { useState, useContext, createContext } from 'react';

// Create a context object that represent the context which the ThemeConsumer will use
const ThemeContext = createContext();

// ContextProvider are usually object which expose the context to the consumer of useContext in the descendent.
// Without provider, the useContext child would not be able to see it. 
function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const handleThemeChange = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }
    
    return (
        <ThemeContext value={{ theme, handleThemeChange }}>
            <div className={`app-theme-${theme}`}>{children}</div>
        </ThemeContext>
    );
}

export { ThemeContext, ThemeContextProvider }

// The react module as a whole most simply helps build the Virtual Dom and transpile the code below into this DOM and hook it
// to an actual DOM
// Hooks: [useState return a state value, and a callback to update the state]
// 2. useContext() argument: accept the name of the context which will help obtain the correct contextapi object
// 3. createContext() return a context object that represent the global object state being shared
// 4. useEffect()
// 5. useReducer()
// 6. useCallback()
// 7. useMemo()
// 8. useRef() ==> hold values which do not trigger re-render
// NEW
// useTransition, useDeferredValue, useSyncExternalStore, useInsertionEffect, useDebugValue, useId


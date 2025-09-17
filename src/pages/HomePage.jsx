import React, { useState, useContext } from 'react';

import { ThemeContext } from '../concept-practices/ContextAPIComponent';

export default function HomePage() {
    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <main>
                Hello there, this is danh military home page
                <div class='theme-action-container'>
                    <button onClick={handleThemeChange}>Change Theme</button>
                    <p>Theme now is {theme}</p>
                </div>
            </main>
        </div>
    )
}

/*
    The purose of the HomePage is to utilize a very popular and powerful feature in React called 'CONTEXT API'

    We will use the HomePage as the component that utilize the useContext hook to obtain the global context of my
    military operation called theme
*/
import React, { useContext } from 'react';

import { ThemeContext } from '../concept-practices/context-api/ContextAPIComponent';
import PageLayout from '../concept-practices/context-api/ContextAPIPractice3/PageLayout';

/*
    HomePageComponent with context Usage
*/
export default function HomePage() {
    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <PageLayout>
                <main>
                    Hello there, this is danh military home page
                    <div className='theme-action-container'>
                        <button onClick={handleThemeChange}>Change Theme</button>
                        <p>Theme now is {theme}</p>
                    </div>
                </main>
            </PageLayout>
        </div>
    )
}

/*
    The purose of the HomePage is to utilize a very popular and powerful feature in React called 'CONTEXT API'

    We will use the HomePage as the component that utilize the useContext hook to obtain the global context of my
    military operation called theme
*/
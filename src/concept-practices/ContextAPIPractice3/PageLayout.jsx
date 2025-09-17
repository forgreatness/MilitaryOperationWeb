import React, { useEffect, useState, useContext } from 'react';

import AuthenticationContext from './AuthenticationContext';
import LoginNavBar from './LoginNavBar';

export default function PageLayout({ children }) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        
        if (token) {
            setIsLogin(true);
        }
    }, []);

    return (
        <AuthenticationContext value={isLogin}>
            <LoginNavBar />
            {children}
        </AuthenticationContext>
    );
}
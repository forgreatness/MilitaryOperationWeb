import { createContext, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage("user", userData);
    const [is2FAVerified, setIs2FAVerified] = useLocalStorage("2FAVerified", false);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        
        navigate('/verify-2fa');
    };

    const logout = () => {
        setUser(null);
        setIs2FAVerified(false);
        navigate("/", { replace: true });
    };

    async function verify2FACode(code) { // This function is hoisted (if needed it hoisted defining it as function is how it should be)
        if (code === "0000") {
            setIs2FAVerified(true);
            return true;
        }
        
        return false;
    }

    // const value = {
    //     user,
    //     is2FAVerified,
    //     login,
    //     logout,
    //     verify2FACode
    // };

    const memoizedAuthContextValue = useMemo(() => ({
        user,
        is2FAVerified,
        login,
        logout,
        verify2FACode
    }), [user, is2FAVerified]);

    return (
        <AuthContext.Provider value={memoizedAuthContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}

/*
useAuth ==> function
returns/output: AuthContext by calling useContext(AuthContext);
AuthContext = {
    user,
    login,
    logout
}

authprovider() ==> 


*/
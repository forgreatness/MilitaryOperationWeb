import { Navigate, useMatch } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { user, is2FAVerified } = useAuth();

    if (!user && !useMatch("/login")) {
        return <Navigate to="/login" />;
    }

    if (!is2FAVerified && !useMatch("/verify-2fa")) {
        return <Navigate to="/verify-2fa" />;
    }

    if (user && is2FAVerified && (useMatch('/login') || useMatch("/verify-2fa"))) {
        return <Navigate to="/profile" />;
    }

    return children;
}
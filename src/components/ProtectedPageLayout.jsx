import { Navigate, useMatch, useOutlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { MainAppBar } from './AppBar';

// export const ProtectedRoute = ({ children }) => {
//     const { user, is2FAVerified } = useAuth();

//     if (!user && !useMatch("/login")) {
//         return <Navigate to="/login" />;
//     }

//     if (!is2FAVerified && !useMatch("/verify-2fa")) {
//         return <Navigate to="/verify-2fa" />;
//     }

//     if (user && is2FAVerified && (useMatch('/login') || useMatch("/verify-2fa"))) {
//         return <Navigate to="/profile" />;
//     }   

//     return children;
// }

export function ProtectedLayout() {
    const outlet = useOutlet();
    const { user, is2FAVerified } = useAuth(); //This is a self made hook utilizing a couple of method that is passed as JS Object properties, the method update the state of user which is passed as a variable from the hook as well

    const isOnLogin = useMatch("/login");
    const isOnVerify2FA = useMatch("/verify-2fa");

    // Case #1: If user is not sign in and current path is not login, lets get them to the login page so they can sign in.
    if (!user && !isOnLogin) {
        return <Navigate to="/login" />
    }

    // Case #2: If user account is not verified and they are not at the verified page then take them there so they can verify
    if (!is2FAVerified && !isOnVerify2FA) {
        return <Navigate to="/verify-2fa" />
    }

    // Case #3: if the user has login, and already verified and they are trying to login or verify again then take them to profile because they shouudn't be loging in twice
    if (user && is2FAVerified && (isOnLogin || isOnVerify2FA)) {
        return <Navigate to="/dashboard/profile" />;
    }

    return (
        <div>
            <MainAppBar pages={[
                { label: "Profile", path: "/dashboard/profile" }
            ]} />
            {outlet}
        </div>
    );
}
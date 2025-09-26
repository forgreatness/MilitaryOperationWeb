import { Suspense } from "react";
import { useLoaderData, useOutlet } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";

import { AuthProvider } from "../hooks/useAuth";

export function AuthLayout() { //The AuthLayout Component is use inside App Component to setup all routes to include AuthLayout as the top header
    const outlet = useOutlet(); // The userOutlet returns nested Route which will be render inside this compnent
    const user = useLoaderData();

    return (
        <Suspense fallback={<LinearProgress />}>
        {/* If the loader throws an error, we’ll show this */}
        {user === undefined ? (
            <Alert severity="error">Something went wrong loading user data!</Alert>
        ) : (
            /* Pass the loaded value to the AuthProvider */
            <AuthProvider userData={user}>
            {/* Render the child route (e.g., HomePage, LoginPage, etc.) */}
                {outlet}
            </AuthProvider>
        )}
        </Suspense>
    );
}
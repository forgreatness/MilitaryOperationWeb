import React, { useContext } from 'react'

import AuthenticationContext from './AuthenticationContext'

export default function LoginNavBar() {
    const isLoggedIn = useContext(AuthenticationContext);

    return (
        <nav>
            {(isLoggedIn ?? false) ? (<div>Profile</div>) : (<a>Sign In</a>)}
        </nav>
    )
}
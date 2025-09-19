import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import AuthenticationContext from './AuthenticationContext'

export default function LoginNavBar() {
    const isLoggedIn = useContext(AuthenticationContext);

    const navigate = useNavigate();

    const handleOnClickSignIn = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    return (
        <nav>
            {(isLoggedIn ?? false) ? (<div>Profile</div>) : (<a onClick={handleOnClickSignIn}>Sign In</a>)}
        </nav>
    )
}
import { useState } from "react"

import { useAuth } from '../hooks/useAuth';

// for this syntax, I would imagin that it is the same as export {LoginPage}
export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth(); // useAuth returns actually an object consist of { user, login, logout }

    const handleLogin = async (e) => {
        e.preventDefault(); //prevent default. dont perform action at the element captured for handleLogin

        // MOCK AUTH CALL | SHOUD CHANGE TO ACTUAL CALL LATER
        if (username === "user" && password === "password") {
            await login({ username });
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="Enter your email" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
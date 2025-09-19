import { useAuth } from "../hooks/useAuth";

export function ProfilePage() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <h1>Hello Comrade, this is your military profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
import { useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = (userCredentials) => setUser({id: 1, role:"admin"});
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => role && user?.role !== role;

    return {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }
}

export default useAuth;
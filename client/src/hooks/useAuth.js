import { useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState({id: 1, role:"admin"});

    const isLogged = () => !!user;
    const hasRole = (role) => role && user?.role !== role;

    return {
        user,
        isLogged,
        hasRole
    }
}

export default useAuth;
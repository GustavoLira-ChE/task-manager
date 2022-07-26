import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userCredentials,fromLocation) => {
        setUser({id: 1, role:"admin"});
        if(fromLocation){
            navigate(fromLocation, {replace: true})
        }
    }
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
import React from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = React.createContext({});

const AuthProvider = ( {children} ) => {

    const authObject = useAuth();
    return(
        <AuthContext.Provider value={authObject}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthProvider };
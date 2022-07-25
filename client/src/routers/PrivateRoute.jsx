import React, {useContext} from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';

const PrivateRoute = ( {hasRole: role ,children} ) => {

    const {user} = useContext(AuthContext);

    if(role && user?.role !== role) return <Navigate to="/projects" /> 
    if(!user) return <Navigate to="/login" />
    return children
};

export default PrivateRoute;
import React, {useContext} from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';

const PublicRoute = ( {children} ) => {

    const {user} = useContext(AuthContext);

    if(user) return <Navigate to="/projects" />
    return children
};

export default PublicRoute;
import React, {useContext} from 'react';
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import routes from '../helpers/routes';

const PrivateRoute = ( {hasRole: role, children} ) => {

    const { hasRole, isLogged} = useContext(AuthContext);
    const location = useLocation();

    if(hasRole(role) && isLogged()) return <Navigate to={routes.projects} /> 
    if(!isLogged()) return <Navigate to={routes.login} state={{from:location}} />
    return children
};

export default PrivateRoute;
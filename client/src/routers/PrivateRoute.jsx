import React, {useContext} from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import routes from '../helpers/routes';

const PrivateRoute = ( {hasRole: role ,children} ) => {

    const { hasRole, isLogged} = useContext(AuthContext);

    if(hasRole(role)) return <Navigate to={routes.projects} /> 
    if(!isLogged()) return <Navigate to={routes.login} />
    return children
};

export default PrivateRoute;
import React, {useContext} from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import routes from '../helpers/routes';

const PublicRoute = ( {children} ) => {

    const {isLogged} = useContext(AuthContext);

    if(isLogged()) return <Navigate to={routes.projects} />
    return children
};

export default PublicRoute;
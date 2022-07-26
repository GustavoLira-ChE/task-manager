import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const userCredentials = {};

const LoginPage = () => {

    const {login} = useContext(AuthContext);
    const location = useLocation();
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(userCredentials, location.state?.from.pathname)}>Iniciar Sesión</button>
        </div>
    );
};

export default LoginPage;
import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';

const userCredentials = {};

const LoginPage = () => {

    const {login} = useContext(AuthContext);
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
        </div>
    );
};

export default LoginPage;
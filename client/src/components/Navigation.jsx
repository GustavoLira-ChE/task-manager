import React, {useContext} from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import routes from '../helpers/routes';

const Navigation = () => {

    const {logout} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
                Task Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={routes.projects}>Projectos</Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesión</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                    <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Navigation;
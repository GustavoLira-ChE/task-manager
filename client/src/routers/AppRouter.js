import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exaxt path='/' component={HomePage}></Route>
                    <Route exaxt path='/login' component={LoginPage}></Route>
                    <Route exaxt path='/register' component={RegisterPage}></Route>
                    <Route exaxt path='/account' component={AccountPage}></Route>
                    <Route exaxt path='/projects' component={ProjectsPage}></Route>
                    <Route exaxt path='/project/:projectId' component={ProjectPage}></Route>
                    <Route exaxt path='/admin/users' component={UsersPage}></Route>
                    <Route exaxt path='*' component={NotFoundPage}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
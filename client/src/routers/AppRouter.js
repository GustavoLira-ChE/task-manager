import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes >
                    <Route exact path='/' element={<HomePage />}></Route>
                    <Route exact path='/login' element={<LoginPage />}></Route>
                    <Route exact path='/register' element={<RegisterPage />}></Route>
                    <Route exact path='/account' element={<AccountPage />}></Route>
                    <Route exact path='/projects' element={<ProjectsPage />}></Route>
                    <Route exact path='/project/:projectId' element={<ProjectPage />}></Route>
                    <Route exact path='/admin/users' element={<UsersPage />}></Route>
                    <Route exact path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
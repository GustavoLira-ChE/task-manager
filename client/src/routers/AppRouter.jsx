import React from "react";
import { Routes, Route } from "react-router-dom";
import roles from "../helpers/roles";
import routes from "../helpers/routes";
import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path={routes.home} element={<PublicRoute><HomePage /></PublicRoute>} />
                <Route exact path={routes.login} element={<PublicRoute><LoginPage /></PublicRoute>} />
                <Route exact path={routes.register} element={<PublicRoute><RegisterPage /></PublicRoute>} />
                <Route exact path={routes.account} element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                <Route exact path={routes.projects} element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
                <Route exact path={routes.project()} element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
                <Route exact path={routes.admin.users} element={<PrivateRoute hasRole={roles.admin}><UsersPage /></PrivateRoute>} />
                <Route exact path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default AppRouter;

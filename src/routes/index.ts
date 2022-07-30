import { RouteType } from "interfaces/routes";

import UserDetails from "ui/application/user-details";

import Login from 'ui/application/login';
import Home from "ui/application/home";

export const authenticatedRoutes: Array<RouteType> = [
    { path: "/secret", component: UserDetails },
];

export const publicRoutes: Array<RouteType> = [{ path: "/", component: Home },
    {path: '/login', component: Login}];

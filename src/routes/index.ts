import { RouteType } from "interfaces/routes";

import Home from "ui/application/home";
import UserDetails from "ui/application/user-details";

export const authenticatedRoutes: Array<RouteType> = [
    { path: "/secret", component: UserDetails },
];

export const publicRoutes: Array<RouteType> = [{ path: "/", component: Home }];

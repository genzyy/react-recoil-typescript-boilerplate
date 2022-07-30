import { RouteType } from "interfaces/routes";
import Home from "ui/application/home";

export const authenticatedRoutes: Array<RouteType> = [];

export const publicRoutes: Array<RouteType> = [{ path: "/", component: Home }];

import React from "react";
import { Routes, Route } from "react-router-dom";
import { authenticatedRoutes, publicRoutes } from "routes";

import Authmiddleware from "routes/Routes";

function App() {
    return (
        <div>
            <Routes>
                {authenticatedRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<Authmiddleware Component={route.component} />}
                    />
                ))}
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default App;

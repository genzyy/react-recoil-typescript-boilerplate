import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const Authmiddleware = ({ Component }) => {
    const auth = window.localStorage.getItem("user");

    if (auth === undefined || auth === null) {
        return <Navigate to="/login" />;
    }
    return <Component />;
};

Authmiddleware.propTypes = {
    Component: PropTypes.any,
};

export default Authmiddleware;

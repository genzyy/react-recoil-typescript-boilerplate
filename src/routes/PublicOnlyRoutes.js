import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const NoAuthUser = ({ Component }) => {
    const auth = window.localStorage.getItem("user");

    if (auth !== undefined || auth !== null) {
        return <Component />;
    }
    return <Navigate to="/market" />;
};

NoAuthUser.propTypes = {
    Component: PropTypes.any,
};

export default NoAuthUser;

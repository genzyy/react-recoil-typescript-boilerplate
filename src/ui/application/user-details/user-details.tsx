import React, { FC } from "react";

const UserDetails: FC = () => {

    const userJSON = window.localStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;

    return (
    <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: *********</p>
            <p>Happy: {user.happy ? ":)" : ":("}</p>
            <p>Status: {user.status}</p>
        </div>
    )
};

export default UserDetails;

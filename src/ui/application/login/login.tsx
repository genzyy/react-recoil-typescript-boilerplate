import React, { FC, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        const user = {
            email: email,
            password: password,
            happy: true,
            status: "online"
        };

        window.localStorage.setItem('user', JSON.stringify(user));
        navigate('/secret');
    }

    return (
        <div>
            <p>Enter your email</p>
            <input type="email" placeholder="Enter your email" onChange={handleEmailChange} />

            <p>Enter your password</p>
            <input type="password" placeholder="Enter your password" onChange={handlePasswordChange} />

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;

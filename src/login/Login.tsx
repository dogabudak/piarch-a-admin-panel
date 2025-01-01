import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Login.css'; // Import the CSS file

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both email and password are required.');
        } else if (email === 'admin@example.com' && password === 'password123') {
            // Example successful login condition
            setError('');
            navigate('/dashboard'); // Navigate to the dashboard page
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="container">
            <h2 className="heading">Login</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="inputContainer">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password" className="label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

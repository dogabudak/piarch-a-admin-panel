import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login/Login';
import CoordinateForm from './coordinate/Coordinates';
import Dashboard from "./dashboard/Dashboard";



const App = () => {
    return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/coordinates" element={<CoordinateForm />} />
            </Routes>
    );
};

export default App;

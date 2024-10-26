import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
    const isAuthenticated = () => {
        // Check if token is stored in localStorage (or cookies)
        return !!localStorage.getItem('token');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/dashboard"
                        element={
                            isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

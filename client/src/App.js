import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/WelcomePage/AboutUs'; // Adjust the path as necessary
import Login from './components/Auth/Login'; // Adjust the path as necessary
import Dashboard from './components/Dashboard/Dashboard'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
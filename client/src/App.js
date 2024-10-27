// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Register from './components/Auth/Register';
// import Dashboard from './components/Dashboard/Dashboard';
// import Hello from './components/Hello'; // Keep this if you need it

// const App = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         // Check if user is authenticated by looking for a token in localStorage
//         const token = localStorage.getItem('authToken');
//         setIsAuthenticated(!!token); // Update auth status based on token presence
//     }, []);

//     return (
//         <Router>
//             <Routes>
//                 {/* If user is authenticated, show the Dashboard; otherwise, redirect to Register */}
//                 <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/register" />} />

//                 {/* Register Route */}
//                 <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register setIsAuthenticated={setIsAuthenticated} />} />

//                 {/* Hello Route for other functionality (if needed) */}
//                 <Route path="/hello" element={isAuthenticated ? <Hello /> : <Navigate to="/register" />} />

//                 {/* Fallback to Redirect */}
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Auth/Register';
// import Login from './components/Auth/Login';
// import MainPage from './components/Dashboard/MainPage';
// import WelcomePage from './components/Dashboard/WelcomePage';
// import Dashboard from './components/Dashboard/Dashboard';

// const App = () => {
//     const isLoggedIn = Boolean(localStorage.getItem('token')); // Check if user is logged in

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/welcome" element={isLoggedIn ? <WelcomePage /> : <MainPage />} />
//                 <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <MainPage />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainPage from './components/Dashboard/MainPage';
// import Login from './components/Auth/Login'; // Ensure you have these components created
// import Register from './components/Auth/Register';
// import Welcome from './components/Dashboard/WelcomePage'; // Assuming you have a Welcome component

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainPage />} /> {/* Main Page */}
//                 <Route path="/login" element={<Login />} /> {/* Login Page */}
//                 <Route path="/register" element={<Register />} /> {/* Register Page */}
//                 <Route path="/welcome" element={<Welcome />} /> {/* Welcome Page */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// src/App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage/LoginPage';

// const App = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // Simulate login function
//     const handleLogin = () => {
//         setIsAuthenticated(true);
//         // You could add logic here to handle actual authentication
//     };

//     return (
//         <Router>
//             <Routes>
//                 {/* If user is authenticated, show the welcome page */}
//                 {isAuthenticated ? (
//                     <Route path="/welcome" element={<h1>Welcome Back!</h1>} />
//                 ) : (
//                     // Otherwise, show the Login Page
//                     <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
//                 )}
//             </Routes>
//         </Router>
//     );
// };

// export default App;

// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simulate login function
    const handleLogin = () => {
        setIsAuthenticated(true);
        // You could add logic here to handle actual authentication
    };

    return (
        <Router>
            <Routes>
                {/* Redirect to dashboard if authenticated */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
                {/* Dashboard route */}
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;

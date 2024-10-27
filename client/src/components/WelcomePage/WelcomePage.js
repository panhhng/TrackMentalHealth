import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './MainPage.css'; // Link to a CSS file for styling

const MainPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the Sign In button click
  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="main-page">
      <header className="main-page-header">
        <div className="logo">Our Logo</div>
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
      </header>
      <p>Hello friend, we hope you are doing alright!</p>
      <div className="email-section">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
      </div>

      <section className="about-us">
        <h2>About Us</h2>
        {/* Add more information as needed */}
      </section>
    </div>
  );
};

export default MainPage;
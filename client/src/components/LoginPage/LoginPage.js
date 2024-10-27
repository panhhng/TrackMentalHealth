import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
    const [mood, setMood] = useState('');
    const navigate = useNavigate();

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!mood) {
            alert('Please select a mood before continuing');
            return;
        }

        onLogin();
        
        // Get existing moods
        const pastMoods = JSON.parse(localStorage.getItem('pastMoods')) || [];
        
        // Add new mood entry with timestamp
        const newMood = {
            mood: mood,
            timestamp: new Date().toISOString()
        };
        
        // Save updated moods array
        localStorage.setItem('pastMoods', JSON.stringify([...pastMoods, newMood]));

        // Navigate to dashboard with the mood
        navigate('/dashboard', { state: { mood } });
    };

    return (
        <div className="login-page">
            <div className="banner">
                <h1>Welcome Back!</h1>
                <p>We're glad to see you again. Let's check in on your mood today.</p>
            </div>
            <form className="mood-form" onSubmit={handleSubmit}>
                <h2>How are you feeling today?</h2>
                <div className="mood-options">
                    <label>
                        <input
                            type="radio"
                            value="happy"
                            checked={mood === 'happy'}
                            onChange={handleMoodChange}
                        />
                        Happy
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="sad"
                            checked={mood === 'sad'}
                            onChange={handleMoodChange}
                        />
                        Sad
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="anxious"
                            checked={mood === 'anxious'}
                            onChange={handleMoodChange}
                        />
                        Anxious
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="calm"
                            checked={mood === 'calm'}
                            onChange={handleMoodChange}
                        />
                        Calm
                    </label>
                </div>
                <button type="submit" className="submit-button" disabled={!mood}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

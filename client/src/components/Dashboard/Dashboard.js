import React, { useState } from 'react';
import { analyzeMood } from '../../services/api';

const Dashboard = () => {
    const [mood, setMood] = useState('');
    const [diaryEntry, setDiaryEntry] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleMoodChange = (e) => setMood(e.target.value);
    const handleDiaryChange = (e) => setDiaryEntry(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // try {
        //     // Save the mood and diary entry in the local database
        //     await saveMoodAndDiary({ diaryEntry });

        //     // Call Gemini API to analyze mood and get feedback
        //     const response = await analyzeMood({ mood, diaryEntry });
        //     setFeedback(response.data.advice); // Assume response has an 'advice' field with feedback
        // } catch (error) {
        //     console.error('Error analyzing mood:', error);
        //     setFeedback('Something went wrong. Please try again.');
        // }
    };

    return (
        <div className="dashboard">
            <h2>Mood Tracker</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Mood:
                    <select value={mood} onChange={handleMoodChange} required>
                        <option value="">How are you doing?</option>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="anxious">Anxious</option>
                        <option value="calm">Calm</option>
                        {/* Add more mood options as needed */}
                    </select>
                </label>
                
                <label>
                    Diary Entry:
                    <textarea
                        placeholder="Write about your day..."
                        value={diaryEntry}
                        onChange={handleDiaryChange}
                        required
                    />
                </label>
                
                <button type="submit">Save and Analyze</button>
            </form>
            
            {feedback && (
                <div className="feedback">
                    <h3>Gemini's Advice</h3>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

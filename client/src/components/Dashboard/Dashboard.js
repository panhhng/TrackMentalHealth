// // export default Dashboard;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//     const location = useLocation();
//     const mood = location.state?.mood; // Get the mood from the location state
//     const [diaryEntry, setDiaryEntry] = useState(''); // State to hold the diary entry
//     let responseMessage;

//     // Set the response message based on the mood
//     switch (mood) {
//         case 'happy':
//             responseMessage = "OMG we're delighted to hear that!";
//             break;
//         case 'sad':
//             responseMessage = "Take a deep breath; let’s talk it out.";
//             break;
//         case 'anxious':
//             responseMessage = "It's okay to feel anxious; let's work through it.";
//             break;
//         case 'calm':
//             responseMessage = "Great to hear you're feeling calm!";
//             break;
//         default:
//             responseMessage = "Welcome! Please select your mood.";
//     }

//     const handleSubmitDiary = async (event) => {
//         event.preventDefault();

//         if (!diaryEntry) {
//             alert('Please write a diary entry before submitting');
//             return;
//         }

//         try {
//             // Send the diary entry to the server
//             const response = await axios.post('/diary', { entry: diaryEntry }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Access the response data directly
//             alert(response.data.message || "Response from Gemini API");
//             setDiaryEntry('');
//         } catch (error) {
//             console.error('Error submitting diary entry:', error);
//             alert('There was an error submitting your diary entry: ' + (error.response?.data?.message || error.message));
//         }
//     };

//     return (
//         <div className="dashboard">
//             <h1>Welcome to Your Dashboard!</h1>
//             <p>{responseMessage}</p>
//             <form onSubmit={handleSubmitDiary}>
//                 <textarea 
//                     value={diaryEntry}
//                     onChange={(e) => setDiaryEntry(e.target.value)}
//                     placeholder="What has been on your mind?" 
//                     rows="10" 
//                     cols="50" 
//                 />
//                 <button type="submit" className="submit-button" disabled={!diaryEntry}>
//                     Submit Diary Entry
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:3001'
});

const Dashboard = () => {
    const location = useLocation();
    const mood = location.state?.mood;
    const [diaryEntry, setDiaryEntry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    let responseMessage;
    switch (mood) {
        case 'happy':
            responseMessage = "OMG we're delighted to hear that!";
            break;
        case 'sad':
            responseMessage = "Take a deep breath; let's talk it out.";
            break;
        case 'anxious':
            responseMessage = "It's okay to feel anxious; let's work through it.";
            break;
        case 'calm':
            responseMessage = "Great to hear you're feeling calm!";
            break;
        default:
            responseMessage = "Welcome! Please select your mood.";
    }

    const handleSubmitDiary = async (event) => {
        event.preventDefault();
        
        if (!diaryEntry) {
            alert('Please write a diary entry before submitting');
            return;
        }

        setIsSubmitting(true);

        try {
            // Use the correct endpoint (/diary instead of /analyze)
            const response = await api.post('/diary', {
                entry: diaryEntry
            });

            alert(response.data.message || "Entry submitted successfully");
            setDiaryEntry('');
        } catch (error) {
            console.error('Error submitting diary entry:', error);
            alert('There was an error submitting your diary entry: ' + 
                  (error.response?.data?.message || error.message));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Your Dashboard!</h1>
            <p>{responseMessage}</p>
            <form onSubmit={handleSubmitDiary}>
                <textarea
                    value={diaryEntry}
                    onChange={(e) => setDiaryEntry(e.target.value)}
                    placeholder="What has been on your mind?"
                    rows="10"
                    cols="50"
                />
                <button 
                    type="submit" 
                    className="submit-button" 
                    disabled={!diaryEntry || isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Diary Entry'}
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
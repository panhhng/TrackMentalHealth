
// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
// });

// export const registerUser = async (userData) => {
//     return await api.post('/auth/register', userData);
// };

// export const loginUser = async (userData) => {
//     return await api.post('/auth/login', userData);
// };

// export const logMood = async (moodData, token) => {
//     return await api.post('/mood', moodData, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
// };

// export const getMoodLogs = async (token) => {
//     return await api.get('/mood', {
//         headers: { Authorization: `Bearer ${token}` },
//     });
// };

// export const saveMoodAndDiary = async (data) => {
//     return await api.post('/moodAndDiary', data);
// };

// // Call Gemini API to analyze mood
// export const analyzeMood = async (data) => {
//     return await axios.post('/api/analyzeMood', data);
// };

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registerUser = async (userData) => {
    return await api.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
    return await api.post('/auth/login', userData);
};

export const logMood = async (moodData, token) => {
    return await api.post('/mood', moodData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getMoodLogs = async (token) => {
    return await api.get('/mood', {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const saveMoodAndDiary = async (data) => {
    return await api.post('/mood', data); // Adjust endpoint if necessary
};

export const analyzeMood = async (data) => {
    return await api.post('/analyzeMood', data);
};

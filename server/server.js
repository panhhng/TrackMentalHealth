const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/mood', moodRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

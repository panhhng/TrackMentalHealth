// // server/server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const DiaryEntry = require('./models/DiaryEntry'); // Adjust the path as necessary
// const sequelize = require('./config/database'); // Adjust the path as necessary

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(bodyParser.json());

// // Sync database and models
// sequelize.sync()
//     .then(() => console.log('Database and tables created successfully.'))
//     .catch(err => console.error('Error creating database or tables:', err));

// // Route to save diary entry
// app.post('/diary', async (req, res) => {
//     const { entry } = req.body;

//     if (!entry) {
//         return res.status(400).json({ error: 'Diary entry is required' });
//     }

//     try {
//         const diaryEntry = await DiaryEntry.create({
//             content: entry,
//         });

//         // Replace this with your AI response logic
//         const responseFromGemini = "This is a placeholder response from the Gemini API";

//         return res.status(201).json({ response: responseFromGemini });
//     } catch (error) {
//         console.error('Error saving diary entry:', error);
//         return res.status(500).json({ error: 'There was an error saving the diary entry' });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const sequelize = require('./config/database'); // Adjust path as necessary
// const DiaryEntry = require('./models/DiaryEntry'); // Ensure correct path

// const app = express();
// const port = 3001;

// app.use(bodyParser.json()); // Ensure body-parser is set up to handle JSON

// // Endpoint to handle diary entries
// app.post('/diary', async (req, res) => {
//     try {
//         const { entry } = req.body; // Extract the entry from the request body

//         if (!entry) {
//             return res.status(400).json({ message: 'Diary entry is required' });
//         }

//         // Create a new diary entry in the database
//         const newEntry = await DiaryEntry.create({ entry });

//         res.status(201).json({ message: 'Diary entry submitted successfully', entry: newEntry });
//     } catch (error) {
//         console.error('Error processing diary entry:', error);
//         res.status(500).json({ message: 'Failed to submit diary entry' });
//     }
// });

// // Sync sequelize and start server
// sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log(`Server is running at http://localhost:${port}`);
//     });
// }).catch(err => {
//     console.error('Failed to connect to the database', err);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const DiaryEntry = require('./models/DiaryEntry');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Development only - Force recreate tables
const initializeDatabase = async () => {
    try {
        // This will drop existing tables and recreate them
        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Failed to sync database:', error);
        process.exit(1);
    }
};

app.post('/diary', async (req, res) => {
    try {
        const { entry } = req.body;

        if (!entry) {
            return res.status(400).json({ message: 'Diary entry is required' });
        }

        const newEntry = await DiaryEntry.create({
            entry: entry
        });

        res.status(201).json({ 
            message: 'Diary entry submitted successfully', 
            entry: newEntry 
        });
    } catch (error) {
        console.error('Error processing diary entry:', error);
        res.status(500).json({ 
            message: 'Failed to submit diary entry',
            error: error.message 
        });
    }
});

// Initialize database and start server
initializeDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const SECRET_KEY = 'your_secret_key'; // Match with the one in authRoutes

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Get mood logs
router.get('/', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM mood_logs WHERE userId = ?`, [req.user.id], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Log mood
router.post('/', authenticateToken, (req, res) => {
    const { mood, entry } = req.body;

    db.run(`INSERT INTO mood_logs (userId, mood, entry) VALUES (?, ?, ?)`, [req.user.id, mood, entry], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const SECRET_KEY = 'your_secret_key'; // Use a strong secret key in production

// Register
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(`INSERT INTO users (username, password, email) VALUES (?, ?, ?)`, [username, hashedPassword, email], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
        if (err || !user) {
            return res.status(401).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.password, (err, match) => {
            if (match) {
                const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
                return res.json({ token });
            }
            return res.status(401).json({ error: 'Invalid password' });
        });
    });
});

module.exports = router;

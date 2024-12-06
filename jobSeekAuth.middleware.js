const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateJobSeeker = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'jobSeeker') {
            return res.status(403).json({ message: 'Access forbidden: Invalid role' });
        }

        // Attach the user information to the request object
        req.jobSeeker = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authenticateJobSeeker;

const express = require('express');
const authenticateJobSeeker = require('./authMiddleware');

const app = express();

app.use(express.json());

// Public Route
app.get('/public-jobs', (req, res) => {
    res.json({ message: 'Public job listings' });
});

// Protected Route
app.get('/protected-profile', authenticateJobSeeker, (req, res) => {
    res.json({ message: 'Job seeker profile', data: req.jobSeeker });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const jwt = require('jsonwebtoken');

const generateToken = (jobSeeker) => {
    return jwt.sign(
        { id: jobSeeker.id, role: 'jobSeeker' }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
};

module.exports = generateToken;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/email');
const geoRoutes = require('./routes/geo');

const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' })); // Default to allow all for local dev, adjust in prod
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Using /api as base URL exactly like VentureMond
app.use('/api', contactRoutes);
app.use('/api/geo', geoRoutes);

// General Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server error occurred' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`🚀 Stacli Backend running on port ${PORT}`);
});

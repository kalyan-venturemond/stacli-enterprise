const rateLimit = require('express-rate-limit');

const contactRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        success: false,
        message: 'Too many inquiries from this IP, please try again after 10 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = contactRateLimiter;

const express  = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');


// Register route
router.post('/register', authController.register);

// Verify OTP route
router.post("/verify-otp", authController.verifyOtpLogin);


//login route
router.post('/login', authController.login);

//Protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({
        message: 'This is a protected User',
        user: req.user,
    });
})

module.exports = router;
// authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, sendMail, resume } = require('./authController');


router.post('/register', registerUser);
router.get('/user/:userId', sendMail);
router.post('/resume', resume);



module.exports = router;

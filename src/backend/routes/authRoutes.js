const express = require('express');
const { login, register } = require('../controllers/authController'); // Check this line
const router = express.Router();

router.post('/login', login); // Check if login is correctly imported
router.post('/register', register); // Check if register is correctly imported

module.exports = router;

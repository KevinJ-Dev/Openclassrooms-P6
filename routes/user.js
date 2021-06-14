const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// Routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

console.log(router.stack);

module.exports = router;
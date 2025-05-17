const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const router = express.Router();

router.route('/login').get(login);

module.exports = router;
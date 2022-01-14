const express = require('express');
const router = express.Router();

const { postRegistration, postLogin, postToken } = require('../controller/auth.controller');

router.post('/login', postLogin);
router.post('/register', postRegistration);
router.post('/accessToken', postToken);

module.exports = router;

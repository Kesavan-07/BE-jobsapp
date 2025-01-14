const express = require('express');
const authController = require('../Controllers/authController');
const auth = require('../middleware/auth');

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.get('/me', auth.checkauth, authController.me);

module.exports = authRouter;

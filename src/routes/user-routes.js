const express = require('express');
const userRoutes = express.Router();
const  userController = require('../controllers/user-controller')

userRoutes.post('/register', userController.createUser);

userRoutes.post('/login', userController.loginUser);

userRoutes.delete('/deleteUser', userController.deleteUser);

module.exports = userRoutes;
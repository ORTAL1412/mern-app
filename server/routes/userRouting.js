const express = require('express');
const controllerHandle = require('../controller/userController');
const newsUserRoute = express.Router();

newsUserRoute.get('/', controllerHandle.getAllUsers);
newsUserRoute.get('/user', controllerHandle.getUserByID);
newsUserRoute.put('/user', controllerHandle.updateUser);
newsUserRoute.delete('/user', controllerHandle.deleteUserByID);
newsUserRoute.post('/', controllerHandle.creatNewUser);

module.exports = newsUserRoute;
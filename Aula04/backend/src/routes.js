const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user',userController.persistData);
routes.get('/user',userController.listUsers);
//routes.get('/userUm',userController.listaUm);
routes.post('/userUm:pessoa',userController.listaUm);
routes.get('/userUm',userController.listaUm);
routes.get('/userSexo',userController.listSexo);
routes.get('/userIdade',userController.listIdade);
routes.get('/userFields/:fields',userController.listManyFields);
module.exports = routes;
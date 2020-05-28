const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const nfController = require('./controllers/nfController');


routes.get('/users',userController.listUsers);

routes.post('/autentica',userController.autentica);

/*Criando uma nova rota chamada login, e pegar o parametro 
chamado Token no Header da requisição, e retornando o mesmo para o usuário*/
routes.post('/login',userController.loginHeaders);

//Pegar parametros da URL
routes.post('/notafiscal/:nf',nfController.listNF);

module.exports = routes;
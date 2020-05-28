const express = require('express');
const server = express();
//Efetuando a importação do pacote que foi instalado para conexão com o Banco
const mongoose = require('mongoose');

//Configuração com a conexão com o Banco de Dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-jrrv6.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true});

//Config

server.use(express.json());

server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Servidor excutando na porta 3002');


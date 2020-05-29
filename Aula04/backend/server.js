const express = require('express');
const server = express();
//Efetuando a importação do pacote que foi instalado para conexão com o Banco
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Configuração com a conexão com o Banco de Dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-jrrv6.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true});

//Importação dos nossos Modelos de Dados
/*Fazendo dessa forma, você vai estar importando especificamente apenas 
um Schema, o que pode se tornar bem complicado de se gerenciar
require('./src/models/userModel');*/
/*Dessa forma, usando o pacote require-dir que foi instalado, é importado
A pasta inteira, dessa forma não vai ter que ficar toda hora criando um 
novo registro caso se crie um noco Schema"*/
requireDir('./src/models');

//Config
server.use(express.json());

server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Servidor excutando na porta 3002');



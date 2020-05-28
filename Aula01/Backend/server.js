const express = require('express');
const server = express();

server.use('/api',require('./src/routes'));

server.listen(3002);

console.log('Servidor ouvindo na porta 3002');
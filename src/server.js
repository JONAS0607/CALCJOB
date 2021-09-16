const express = require('express');
const routes = require('./routes');
const server = express();

// usando template engine
server.set('view engine', 'ejs');
// habilitar arquivos estáticos
server.use(express.static('public'));
//routes
server.use(routes);
// request, response
// server.get('/', (request, response) => {
//   //   console.log(__dirname + '/views/index.html');
//   return response.sendFile(__dirname + '/views/index.html');
// });

server.listen(3000, () => console.log('rodando!'));

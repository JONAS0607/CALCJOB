const express = require("express");
const routes = require("./routes");
const server = express();
const path = require("path");

// usando template engine
server.set("view engine", "ejs");
// se caso a pasta view estiver em outro local podemos usar
// server.set("view", path.join(__dirname, "views"));
// habilitar arquivos estáticos
server.use(express.static("public"));
// usar o req.body
server.use(express.urlencoded({ extended: true }));
//routes
server.use(routes);
// request, response
// server.get('/', (request, response) => {
//   //   console.log(__dirname + '/views/index.html');
//   return response.sendFile(__dirname + '/views/index.html');
// });

server.listen(3000, () => console.log("rodando!"));

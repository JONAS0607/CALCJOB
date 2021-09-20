const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//configurar a abertura do banco de dados o open()

module.exports = () =>
  open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

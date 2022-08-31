
// Importando o express;
const express = require("express");
// Armazenando o express em execução dentro da constante app.
const app = express();
const router = require("../routes/");
// Configurando o servidor para recever informações no formato JSON.
app.use(express.json());

app.use(router);

module.exports = app;
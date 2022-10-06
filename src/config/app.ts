
// Importando o express;
import express from "express";
// Armazenando o express em execução dentro da constante app.
const app = express();
import { router } from "../routes/";
// Configurando o servidor para recever informações no formato JSON.
app.use(express.json());

app.use(router);

export { app };
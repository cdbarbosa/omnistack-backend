const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const { errors } = require("celebrate");
// criando a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Metodos HTTP
 * GET
 * POST
 * PUT
 * DELETE
 */

/**
 * Tipos de parâmetros
 * Query Params - Parâmetros nomeados enviados na rota após  "?" (Filtros, Paginação)
 * Route Parmas - Parâmetros utilizados para identificar recursos
 * Request Body - Corpo da requisição, utilizado para criar ou alterar recusos
 */
module.exports = app;
// app.listen(3333);

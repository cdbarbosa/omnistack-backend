const express = require("express");

// criando a aplicação
const app = express();

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.listen(3333);

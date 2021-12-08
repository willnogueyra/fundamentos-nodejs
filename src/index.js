const express = require('express');

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "Hello World! Fundamentos Nodejs"})
})

app.listen(3333) // localhost:3333
const express = require('express');

const app = express();

app.get('/',(req,res) => {
  res.send("Hola Martin y Jessica");
});

const port = process.env.port || 8081;

app.listen(8081, () => {
    console.log("hola desde la consola");
});

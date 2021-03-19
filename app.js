const express = require('express');

const app = express();

app.get('/',(req,res) => {
  res.send("Hola Martin y Jessica");
});

app.listen(3000, () => {
    console.log("hola desde la consola");
});

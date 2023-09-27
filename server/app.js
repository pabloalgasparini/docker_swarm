const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hola mundo desde el contenedor Node.js');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});

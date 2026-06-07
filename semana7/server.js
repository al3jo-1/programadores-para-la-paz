const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>API Reportes</title>
  </head>
  <body>
    <h1>API Reportes activa</h1>
    <p>Usa <code>/reportes</code> para consultar o crear reportes.</p>
  </body>
</html>`);
});

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
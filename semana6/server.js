const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde la carpeta public (si existe)
app.use(express.static('public'));

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  if (!nombre || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos: nombre y mensaje son requeridos' });
  }

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  if (!tipo || !descripcion) {
    return res.status(400).json({ error: 'Faltan campos: tipo y descripcion son requeridos' });
  }

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error en el servidor:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
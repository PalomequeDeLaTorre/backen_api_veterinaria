const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// Conexión con la BD
mongoose
  //.connect('mongodb://127.0.0.1:27017/veterinaria')
  .connect('mongodb+srv://carlospdti22:T0anMN2QvanAcYh5@cluster0.lojtckl.mongodb.net/veterinaria?retryWrites=true&w=majority&appName=Cluster0')
  .then((x) => {
    console.log(`Conectado exitosamente a la BD: "${x.connections[0].name}"`);
  })
  .catch((error) => {
    console.error('Error al conectarse a Mongo:', error);
  });

const app = express();

// Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Ruta raíz para verificar que el servidor está corriendo

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API de Veterinaria funcionando',
    timestamp: new Date().toISOString()
  });
});

// Rutas API

const veterinariaRutas = require('./routes/veterinaria.routes'); 
app.use('/api/veterinaria', veterinariaRutas);

// Manejador de error 404

app.use((req, res, next) => {
  console.log(`Ruta no encontrada: ${req.method} ${req.path}`);
  next(createError(404, 'Ruta no encontrada'));
});

// Manejador de errores general

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status || 500
  });
});

// Iniciar servidor

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});

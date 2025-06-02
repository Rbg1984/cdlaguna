const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ejemplo de ruta API
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend de CD Laguna!' });
});

// Sirve el frontend Angular compilado
app.use(express.static(path.join(__dirname, '../frontend/dist/cdlaguna')));

// Para cualquier otra ruta, devuelve index.html (Angular routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/cdlaguna/index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const jugadoresRoutes = require('./routes/jugadores');

// Middleware
app.use(express.json());

// Rutas API
app.use('/api/jugadores', jugadoresRoutes);

// Servir frontend compilado
app.use(express.static(path.join(__dirname, '../frontend/dist/cdlaguna')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/cdlaguna/index.html'));
});

// Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

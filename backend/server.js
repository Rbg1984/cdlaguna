const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const jugadoresRoutes = require('./routes/jugadores');

// Middleware
app.use(express.json());

// API
app.use('/api/jugadores', jugadoresRoutes);

// ⚠️ Servir directamente el frontend desde frontend/dist
const frontendPath = path.join(__dirname, '../frontend/dist/cdlaguna');
app.use(express.static(frontendPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

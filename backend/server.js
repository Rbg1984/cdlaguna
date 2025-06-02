const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Aquí van tus middlewares y rutas API...

// Sirve archivos estáticos Angular
app.use(express.static(path.join(__dirname, '../frontend/dist/cdlaguna')));

// Redirige cualquier ruta que no sea API al frontend (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/cdlaguna/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});


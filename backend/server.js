const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Rutas API (puedes añadir las tuyas aquí)

// Servir archivos estáticos Angular
app.use(express.static(path.join(__dirname, '../frontend/dist/cdlaguna')));

// Redirigir cualquier otra ruta al index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/cdlaguna/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


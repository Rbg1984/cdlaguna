const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta API de ejemplo
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend de CD Laguna!' });
});

// Servir archivos estáticos del frontend compilado (ahora en public)
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir todo lo demás al index.html (Angular routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



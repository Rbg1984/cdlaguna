const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obtener todos los jugadores
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jugadores');
    res.json(result.rows);
  } catch (err) {
    console.error('Error obteniendo jugadores:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;

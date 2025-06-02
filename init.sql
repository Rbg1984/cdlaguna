-- Tabla de jugadores
CREATE TABLE jugadores (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  cuota_pagada BOOLEAN DEFAULT FALSE,
  documentacion_subida BOOLEAN DEFAULT FALSE
);

-- Tabla de socios
CREATE TABLE socios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  cuota_pagada BOOLEAN DEFAULT FALSE
);

-- Tabla de usuarios (admin)
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

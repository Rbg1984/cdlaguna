<<<<<<< HEAD
# cdlaguna
=======
# CD Laguna Project

## Descripción
Proyecto fullstack para el Club Deportivo Laguna de Duero. Incluye frontend Angular, backend Node.js con Express y base de datos PostgreSQL.

## Estructura
- `frontend/`: Código Angular compilado
- `backend/`: Servidor Express que sirve el frontend y maneja las rutas
- `init.sql`: Script para la base de datos
- `render.yaml`: Configuración para despliegue en Render

## Desarrollo local
```bash
npm install
npm run build --prefix frontend
node backend/server.js
```

## Despliegue en Render
Render detectará `render.yaml` y levantará automáticamente el servicio.
>>>>>>> d02f8dd (Initial commit)

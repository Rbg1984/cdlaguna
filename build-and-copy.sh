#!/bin/bash

echo "📦 Instalando dependencias del frontend..."
cd frontend
npm install

echo "⚙️ Compilando Angular en modo producción..."
ng build --configuration production

echo "📁 Copiando archivos compilados al backend/public..."
rm -rf ../backend/public
mkdir -p ../backend/public
cp -r dist/cdlaguna/* ../backend/public

echo "📦 Instalando dependencias del backend..."
cd ../backend
npm install

echo "✅ ¡Listo! Puedes hacer git commit y push ahora."

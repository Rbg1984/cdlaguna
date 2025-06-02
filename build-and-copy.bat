@echo off
echo 📦 Instalando dependencias del frontend...
cd frontend
call npm install

echo ⚙️ Compilando Angular en modo producción...
call npm run build --configuration production

echo 📁 Copiando archivos compilados al backend\public...
cd ..
rmdir /S /Q backend\public
mkdir backend\public
xcopy /E /I /Y frontend\dist\cdlaguna\* backend\public\

echo 📦 Instalando dependencias del backend...
cd backend
call npm install

echo ✅ ¡Listo! Puedes hacer git commit y push ahora.
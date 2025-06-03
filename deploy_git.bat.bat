@echo off
echo ==============================
echo 🔧 Compilando Angular (producción)...
echo ==============================
cd frontend
call npx ng build --configuration production
cd..

echo ==============================
echo 🔁 Configurando remote origin...
echo ==============================
git remote set-url origin https://github.com/Rbg1984/cdlaguna.git

echo ==============================
echo 📦 Añadiendo archivos...
echo ==============================
git add -A

echo ==============================
echo 📝 Haciendo commit...
echo ==============================
git commit -m "Build y push forzado"

echo ==============================
echo 🚀 Haciendo push forzado...
echo ==============================
git push origin main --force

echo.
echo ✅ Proyecto compilado y subido a GitHub correctamente.
pause

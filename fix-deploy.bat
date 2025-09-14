@echo off
echo 🔧 Fixing deployment issues...

echo 📦 Step 1: Cleaning node_modules and package-lock.json
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json

echo 📦 Step 2: Installing dependencies with correct versions
npm install

echo 🔨 Step 3: Testing build process
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful! Ready for deployment.
    echo 🚀 You can now run: npm run deploy
) else (
    echo ❌ Build failed. Checking for errors...
    echo Please check the error messages above.
)

pause

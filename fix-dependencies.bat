@echo off
echo 🔧 Fixing dependency conflicts...

echo 📦 Step 1: Clean install dependencies
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json

echo 📦 Step 2: Installing with legacy peer deps to resolve conflicts
npm install --legacy-peer-deps

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo 🔨 Step 3: Testing build
    npm run build
    
    if %errorlevel% equ 0 (
        echo ✅ Build successful!
        echo 🚀 Ready for TypeScript development
    ) else (
        echo ❌ Build failed!
        echo Check the error messages above.
    )
) else (
    echo ❌ Installation failed!
    echo Try running: npm install --force
)

pause

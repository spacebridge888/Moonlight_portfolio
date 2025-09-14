@echo off
echo 🚀 Starting deployment process...

REM Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Clear any existing build
if exist "build" (
    echo 🧹 Cleaning previous build...
    rmdir /s /q build
)

REM Build the project
echo 🔨 Building project...
npm run build:prod

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📁 Build files created in 'build' directory
    echo 🌐 Ready for deployment!
) else (
    echo ❌ Build failed!
    exit /b 1
)

@echo off
echo 🔧 Fixing build errors...

echo 📦 Step 1: Clean install dependencies
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json
npm install

echo 🔨 Step 2: Testing build
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 🚀 Ready for deployment
    echo Run: npm run deploy
) else (
    echo ❌ Build failed!
    echo Check the error messages above.
    echo.
    echo 💡 If you still see JSX runtime errors, try:
    echo 1. Check if all components exist
    echo 2. Verify React version compatibility
    echo 3. Check browser console for runtime errors
)

pause

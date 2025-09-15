@echo off
echo 🔧 Fixing TypeScript version conflict...

echo 📦 Step 1: Clean install dependencies
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json

echo 📦 Step 2: Installing with legacy peer deps to resolve conflicts
npm install --legacy-peer-deps

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo 🔨 Step 3: Testing TypeScript build
    npm run build
    
    if %errorlevel% equ 0 (
        echo ✅ TypeScript build successful!
        echo 🚀 Ready for TypeScript development and deployment
        echo.
        echo 📋 Next steps:
        echo 1. Convert remaining .js files to .tsx
        echo 2. Add proper TypeScript types
        echo 3. Run: npm run deploy
    ) else (
        echo ❌ Build failed!
        echo Check the error messages above.
        echo.
        echo 💡 If you still see TypeScript errors:
        echo 1. Check for missing type definitions
        echo 2. Verify all imports are correct
        echo 3. Run: npm run build --verbose
    )
) else (
    echo ❌ Installation failed!
    echo Try running: npm install --force
    echo.
    echo 💡 Alternative solutions:
    echo 1. Use: npm install --legacy-peer-deps --force
    echo 2. Or downgrade to react-scripts 4.x
)

pause

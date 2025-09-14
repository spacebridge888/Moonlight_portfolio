@echo off
echo 🔍 Testing deployment errors with ESLint...

echo 📦 Step 1: Installing/updating dependencies
npm install

echo 🔍 Step 2: Running ESLint to check for errors
npm run lint:check

if %errorlevel% neq 0 (
    echo ❌ ESLint found errors! Fix them before deploying.
    echo 💡 Run 'npm run lint:fix' to auto-fix some issues.
    pause
    exit /b 1
)

echo ✅ ESLint passed! No errors found.

echo 🔨 Step 3: Testing build process
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed! Check the error messages above.
    pause
    exit /b 1
)

echo ✅ Build successful!

echo 🚀 Step 4: Ready for deployment
echo You can now run: npm run deploy

pause

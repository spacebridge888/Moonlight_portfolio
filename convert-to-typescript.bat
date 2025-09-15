@echo off
echo 🔄 Converting project to TypeScript...

echo 📦 Step 1: Installing TypeScript dependencies
npm install

echo 🔄 Step 2: Converting component files to TypeScript
echo Converting Header.js to Header.tsx...
if exist "src\components\Header.js" ren src\components\Header.js Header.tsx

echo Converting Hero.js to Hero.tsx...
if exist "src\components\Hero.js" ren src\components\Hero.js Hero.tsx

echo Converting About.js to About.tsx...
if exist "src\components\About.js" ren src\components\About.js About.tsx

echo Converting Skills.js to Skills.tsx...
if exist "src\components\Skills.js" ren src\components\Skills.js Skills.tsx

echo Converting Projects.js to Projects.tsx...
if exist "src\components\Projects.js" ren src\components\Projects.js Projects.tsx

echo Converting CryptoPrices.js to CryptoPrices.tsx...
if exist "src\components\CryptoPrices.js" ren src\components\CryptoPrices.js CryptoPrices.tsx

echo Converting Contact.js to Contact.tsx...
if exist "src\components\Contact.js" ren src\components\Contact.js Contact.tsx

echo Converting Footer.js to Footer.tsx...
if exist "src\components\Footer.js" ren src\components\Footer.js Footer.tsx

echo Converting data files to TypeScript...
if exist "src\data\projects.js" del src\data\projects.js
if exist "src\data\skills.js" del src\data\skills.js
if exist "src\services\cryptoApi.js" del src\services\cryptoApi.js

echo Converting main files...
if exist "src\App.js" del src\App.js
if exist "src\index.js" del src\index.js

echo 🔨 Step 3: Testing TypeScript build
npm run build

if %errorlevel% equ 0 (
    echo ✅ TypeScript conversion successful!
    echo 🚀 Ready for deployment
    echo Run: npm run deploy
) else (
    echo ❌ Build failed!
    echo Check the error messages above.
    echo You may need to fix TypeScript errors in the components.
)

pause

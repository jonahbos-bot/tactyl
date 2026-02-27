@echo off
REM Tactyl.io Website - Diagnostic Script (Windows)

echo.
echo ============================================
echo   Tactyl.io Website - Diagnostic Check
echo ============================================
echo.

REM Check 1: Node.js
echo 1. Checking Node.js...
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js is installed
    node -v
) else (
    echo [ERROR] Node.js is NOT installed
    echo Please install from https://nodejs.org
    pause
    exit /b 1
)
echo.

REM Check 2: npm
echo 2. Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] npm is installed
    npm -v
) else (
    echo [ERROR] npm is NOT installed
    pause
    exit /b 1
)
echo.

REM Check 3: Required files
echo 3. Checking required files...
set ALL_FILES_EXIST=1

if exist package.json (
    echo [OK] package.json exists
) else (
    echo [ERROR] package.json is MISSING
    set ALL_FILES_EXIST=0
)

if exist index.html (
    echo [OK] index.html exists
) else (
    echo [ERROR] index.html is MISSING
    set ALL_FILES_EXIST=0
)

if exist vite.config.js (
    echo [OK] vite.config.js exists
) else (
    echo [ERROR] vite.config.js is MISSING
    set ALL_FILES_EXIST=0
)

if exist src\App.jsx (
    echo [OK] src\App.jsx exists
) else (
    echo [ERROR] src\App.jsx is MISSING
    set ALL_FILES_EXIST=0
)

if exist src\main.jsx (
    echo [OK] src\main.jsx exists
) else (
    echo [ERROR] src\main.jsx is MISSING
    set ALL_FILES_EXIST=0
)
echo.

if %ALL_FILES_EXIST% EQU 0 (
    echo [ERROR] Some required files are missing!
    echo Make sure you're in the correct directory.
    pause
    exit /b 1
)

REM Check 4: node_modules
echo 4. Checking node_modules...
if exist node_modules (
    echo [OK] node_modules directory exists
    
    if exist node_modules\react (
        echo [OK] React is installed
    ) else (
        echo [WARNING] React is NOT installed
        echo Run: npm install
    )
) else (
    echo [WARNING] node_modules directory does NOT exist
    echo You need to run: npm install
)
echo.

REM Check 5: dist folder
echo 5. Checking production build...
if exist dist (
    echo [OK] dist directory exists
    dir dist /b >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo [OK] dist directory has content
    ) else (
        echo [WARNING] dist directory is empty
        echo Run: npm run build
    )
) else (
    echo [WARNING] dist directory does NOT exist
    echo Run: npm run build to create it
)
echo.

REM Summary
echo ============================================
echo   Summary
echo ============================================
echo.

if %ALL_FILES_EXIST% EQU 1 (
    echo [OK] All required files are present
) else (
    echo [ERROR] Some files are missing
)

if exist node_modules\react (
    echo [OK] Dependencies are installed
) else (
    echo [ERROR] Dependencies need to be installed
    echo.
    echo Next step: Run 'npm install'
)

echo.
echo ============================================
echo   Recommended Next Steps
echo ============================================
echo.

if not exist node_modules (
    echo 1. Install dependencies:
    echo    npm install
    echo.
    echo 2. Start dev server:
    echo    npm run dev
) else (
    echo 1. Start dev server:
    echo    npm run dev
    echo.
    echo 2. Open browser to:
    echo    http://localhost:5173
)

echo.
echo If you see a white screen, check the browser console (F12)
echo.
pause

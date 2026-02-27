@echo off
REM Tactyl.io Website - Quick Start Script (Windows)
REM This script helps you get up and running quickly

echo.
echo ============================================
echo   Tactyl.io Website - Quick Start
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js 18.x or higher from https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js detected: 
node -v
echo.

REM Install dependencies
echo Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Dependencies installed successfully!
) else (
    echo.
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Setup Complete!
echo ============================================
echo.
echo Available commands:
echo -------------------
echo.
echo   npm run dev       - Start development server
echo   npm run build     - Build for production
echo   npm run preview   - Preview production build
echo.
echo Next steps:
echo -----------
echo.
echo 1. Start development server:
echo    npm run dev
echo.
echo 2. Open browser to http://localhost:5173
echo.
echo 3. When ready to deploy, see AZURE_DEPLOYMENT.md
echo.
echo Documentation:
echo --------------
echo   - README.md - Complete project docs
echo   - AZURE_DEPLOYMENT.md - Deployment guide
echo   - PROJECT_SUMMARY.md - Overview and features
echo.
echo Happy coding! 
echo.
pause

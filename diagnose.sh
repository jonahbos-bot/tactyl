#!/bin/bash

# Tactyl.io Website - Diagnostic Script
# This script checks for common issues

echo "🔍 Tactyl.io Website - Diagnostic Check"
echo "========================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Node.js
echo "1. Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓${NC} Node.js installed: $NODE_VERSION"
    
    # Check version
    NODE_MAJOR=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_MAJOR" -lt 18 ]; then
        echo -e "${YELLOW}⚠${NC} Warning: Node.js $NODE_VERSION detected. Recommended: 18.x or higher"
    fi
else
    echo -e "${RED}✗${NC} Node.js is NOT installed"
    echo "   Please install from https://nodejs.org"
    exit 1
fi
echo ""

# Check 2: npm
echo "2. Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓${NC} npm installed: $NPM_VERSION"
else
    echo -e "${RED}✗${NC} npm is NOT installed"
    exit 1
fi
echo ""

# Check 3: Required files
echo "3. Checking required files..."
REQUIRED_FILES=("package.json" "index.html" "vite.config.js" "src/App.jsx" "src/main.jsx")
ALL_FILES_EXIST=true

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file exists"
    else
        echo -e "${RED}✗${NC} $file is MISSING"
        ALL_FILES_EXIST=false
    fi
done
echo ""

if [ "$ALL_FILES_EXIST" = false ]; then
    echo -e "${RED}ERROR:${NC} Some required files are missing!"
    echo "Make sure you're in the correct directory."
    exit 1
fi

# Check 4: node_modules
echo "4. Checking node_modules..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules directory exists"
    
    # Check if react is installed
    if [ -d "node_modules/react" ]; then
        echo -e "${GREEN}✓${NC} React is installed"
    else
        echo -e "${YELLOW}⚠${NC} React is NOT installed"
        echo "   Run: npm install"
    fi
else
    echo -e "${YELLOW}⚠${NC} node_modules directory does NOT exist"
    echo "   You need to run: npm install"
fi
echo ""

# Check 5: Port availability
echo "5. Checking if port 5173 is available..."
if lsof -Pi :5173 -sTCP:LISTEN -t &> /dev/null; then
    echo -e "${YELLOW}⚠${NC} Port 5173 is already in use"
    echo "   You may need to stop the existing process or use a different port"
else
    echo -e "${GREEN}✓${NC} Port 5173 is available"
fi
echo ""

# Check 6: dist folder (for production build)
echo "6. Checking production build..."
if [ -d "dist" ]; then
    echo -e "${GREEN}✓${NC} dist directory exists"
    
    # Check if it has content
    if [ "$(ls -A dist)" ]; then
        echo -e "${GREEN}✓${NC} dist directory has content"
        echo "   File count: $(find dist -type f | wc -l) files"
    else
        echo -e "${YELLOW}⚠${NC} dist directory is empty"
        echo "   Run: npm run build"
    fi
else
    echo -e "${YELLOW}⚠${NC} dist directory does NOT exist"
    echo "   Run: npm run build to create it"
fi
echo ""

# Summary
echo "========================================"
echo "📋 Summary:"
echo "========================================"
echo ""

if [ "$ALL_FILES_EXIST" = true ]; then
    echo -e "${GREEN}✓${NC} All required files are present"
else
    echo -e "${RED}✗${NC} Some files are missing"
fi

if [ -d "node_modules" ] && [ -d "node_modules/react" ]; then
    echo -e "${GREEN}✓${NC} Dependencies are installed"
else
    echo -e "${RED}✗${NC} Dependencies need to be installed"
    echo ""
    echo "Next step: Run 'npm install'"
fi

echo ""
echo "========================================"
echo "🚀 Recommended Next Steps:"
echo "========================================"
echo ""

if [ ! -d "node_modules" ]; then
    echo "1. Install dependencies:"
    echo "   npm install"
    echo ""
    echo "2. Start dev server:"
    echo "   npm run dev"
else
    echo "1. Start dev server:"
    echo "   npm run dev"
    echo ""
    echo "2. Open browser to:"
    echo "   http://localhost:5173"
fi

echo ""
echo "If you see a white screen, check the browser console (F12)"
echo ""

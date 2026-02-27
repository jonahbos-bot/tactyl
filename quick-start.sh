#!/bin/bash

# Tactyl.io Website - Quick Start Script
# This script helps you get up and running quickly

set -e

echo "🚀 Tactyl.io Website - Quick Start"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18.x or higher from https://nodejs.org"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Warning: Node.js version $NODE_VERSION detected"
    echo "Recommended: Node.js 18.x or higher"
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Available commands:"
echo "==================="
echo ""
echo "  npm run dev       - Start development server (http://localhost:5173)"
echo "  npm run build     - Build for production (output: dist/)"
echo "  npm run preview   - Preview production build"
echo ""
echo "Next steps:"
echo "==========="
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open browser to http://localhost:5173"
echo ""
echo "3. When ready to deploy, see AZURE_DEPLOYMENT.md"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Complete project documentation"
echo "   - AZURE_DEPLOYMENT.md - Azure deployment guide"
echo "   - PROJECT_SUMMARY.md - Overview and features"
echo ""
echo "Happy coding! 🎨"

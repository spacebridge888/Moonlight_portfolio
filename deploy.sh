#!/bin/bash

# Deployment script for Moonlight Portfolio
echo "🚀 Starting deployment process..."

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clear any existing build
if [ -d "build" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf build
fi

# Build the project
echo "🔨 Building project..."
npm run build:prod

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files created in 'build' directory"
    echo "🌐 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi

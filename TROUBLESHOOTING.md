# Troubleshooting Guide

## Common Issues and Solutions

### 1. Package Installation Issues

If you encounter errors during `npm install`:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### 2. Framer Motion Compatibility

If you see framer-motion related errors, ensure you're using a compatible version:

```bash
npm install framer-motion@6.5.1
```

### 3. React Typed Issues

If react-typed doesn't work properly:

```bash
npm install react-typed@2.0.12
```

### 4. TailwindCSS Not Working

If styles aren't being applied:

1. Ensure TailwindCSS is properly configured
2. Check that `@tailwind` directives are in `src/index.css`
3. Restart the development server

### 5. Port Already in Use

If port 3000 is already in use:

```bash
# Kill process on port 3000
npx kill-port 3000

# Or start on a different port
PORT=3001 npm start
```

### 6. Build Issues

If the build fails:

```bash
# Clear build folder
rm -rf build

# Rebuild
npm run build
```

### 7. Windows-Specific Issues

On Windows, if you encounter permission issues:

```bash
# Run as administrator
# Or use PowerShell instead of Command Prompt
```

### 8. Node Version Issues

Ensure you're using Node.js 16 or higher:

```bash
node --version
```

If needed, update Node.js from [nodejs.org](https://nodejs.org/)

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Getting Help

If you continue to experience issues:

1. Check the console for specific error messages
2. Ensure all dependencies are properly installed
3. Try clearing cache and reinstalling
4. Check Node.js and npm versions

## Contact

For additional support, contact:
- Email: smartec3414@gmail.com
- GitHub: moonlight987

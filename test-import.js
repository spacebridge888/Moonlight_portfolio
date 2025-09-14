// Simple test to check if App can be imported
try {
  const App = require('./src/App.js');
  console.log('✅ App component imported successfully');
  console.log('App type:', typeof App.default);
} catch (error) {
  console.log('❌ Error importing App:', error.message);
}

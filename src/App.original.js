// Debug version of App.js to identify white screen issues

function App() {
  
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#0f172a', color: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Moonlight987 Portfolio</h1>
      <p>If you can see this, the basic React app is working.</p>
      
      {/* Test basic components one by one */}
      <div style={{ marginTop: '20px' }}>
        <h2>Testing Components:</h2>
        <ul>
          <li>✅ App component renders</li>
          <li>✅ Basic styling works</li>
          <li>🔄 Testing other components...</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

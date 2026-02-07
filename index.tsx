
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("React mounting...");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <div style={{ color: 'white', position: 'fixed', top: 0, left: 0, zIndex: 9999, display: 'none' }}>Site Initializing...</div>
      <App />
    </HashRouter>
  </React.StrictMode>
);

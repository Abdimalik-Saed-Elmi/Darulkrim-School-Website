// src/main.jsx
import './index.css'; // Add this line
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Hooks/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>

      <BrowserRouter>
           <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
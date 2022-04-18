import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './bootstrap.min.css' // stil leri hazir aldim. bootswatch.com'dan. theme Sketchy

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


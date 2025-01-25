import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ghadedi ko location
const rootDiv = document.getElementById('root') // document

// Kasto ghar/ghadedi
const root = ReactDOM.createRoot(rootDiv); // Kata gayera react ko elements lai rakham??

// tyo root element vitra gayera yo react components lai render/display gar
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

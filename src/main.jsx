import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

// Contenu du console.log personnalisé dans la console
const msg = "⚙️ Website designed & built by Dylan Piriou";
const style = "color: #f1f1f1; font-size: 14px; padding: 30px; font-weight: 100; font-family: sans-serif";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Affichage du console log personnalisé
console.log("%c" + msg, style);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

// Contenu du console.log personnalisé dans la console
const message = "© Website designed & built by Dylan Piriou";
const style = "color: grey; font-size: 14px; text-decoration: underline; padding: 30px; font-weight: 100; font-family: sans-serif";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Affichage du console log personnalisé
console.log("%c" + message, style);

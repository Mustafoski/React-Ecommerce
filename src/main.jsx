import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './context/ProductProvider.jsx';
import { CardProvider } from './context/CardContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </ProductProvider>
  </React.StrictMode>
);

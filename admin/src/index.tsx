import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@assets/styles/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);

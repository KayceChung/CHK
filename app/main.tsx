import '../styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const basename = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL.replace(/\/$/, '');

const redirect = window.location.search.match(/^\?\/(.*)$/);

if (redirect) {
  const decodedPath = redirect[1].replace(/~and~/g, '&');
  const targetPath = `${window.location.pathname}${decodedPath ? decodedPath : ''}`;
  window.history.replaceState(null, '', targetPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

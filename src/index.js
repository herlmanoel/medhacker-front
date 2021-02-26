import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import ListagemProvider from './context/Listagem';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ListagemProvider>
        <Routes />
      </ListagemProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
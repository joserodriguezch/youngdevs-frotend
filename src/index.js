import React from 'react';
import ReactDOM from 'react-dom';

import Router from './pages/Router';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);

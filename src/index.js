import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './assets/css/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter base="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



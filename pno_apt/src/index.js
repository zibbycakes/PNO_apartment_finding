import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from 'react-dom'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

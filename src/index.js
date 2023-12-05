import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'jquery/dist/jquery.min.js'; // Import jQuery
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SoftUIControllerProvider } from 'assets/context';
import { Provider } from 'react-redux';
import store from './stores/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <SoftUIControllerProvider>
        <App />
    </SoftUIControllerProvider>
    </BrowserRouter>
  </Provider>
  ,
);

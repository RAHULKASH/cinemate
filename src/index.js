import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter as Routers } from 'react-router-dom';
import { ScrollToTop } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Routers>
    <ScrollToTop/>
    <App />
  </Routers>
  </React.StrictMode>
);


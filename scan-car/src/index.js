import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation'
import Routing from './Routing'

ReactDOM.render(
  <React.StrictMode>
    <Routing />
    <Navigation />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'

import Parse from 'parse'

Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


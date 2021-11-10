import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content'
import Sidebar from './components/Sidebar';
import Navigation from './components/navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Content>
    <Sidebar />
    
    </Content>
  </React.StrictMode>,
  document.getElementById('root')
);


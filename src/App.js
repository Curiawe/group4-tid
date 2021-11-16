import { BrowserRouter as Router, Switch, Route, Link } from 'react-rounter-dom';

import Navigation from './components/navigation/navigation'
import Sidebar from './components/sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <div>
      (//**Content goes here */)
      </div>
    </div>
  );
}

export default App;

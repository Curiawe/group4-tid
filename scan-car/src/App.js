import logo from './logo.svg';
import './App.css';
import './components/largeButtons.css'
import LargeButtons from './components/largeButtons'

function App() {
  return (
    <div className="App">

    <LargeButtons>
      <button>Button 2</button>
      <button>Button 3</button>
    </LargeButtons>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

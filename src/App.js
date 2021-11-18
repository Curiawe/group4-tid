import Navigation from './components/navigation/navigation'
import Booking from './components/navigation/booking'
import NavigationButtons from './components/navigation/navigationButtons'
import Pickup from './components/navigation/pickup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      (//**Sidebar will go here */)
      (//**Content will go here */)
      <Pickup/>
    </div>
  );
}

export default App;

//Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-rounter-dom';


//Global Components
import Navigation from './components/navigation/navigation'
import Sidebar from './components/sidebar/Sidebar'
import './App.css';

//Pages
import Bookings from './pages/BookingOverview';
import BookingSearch from './pages/BookingSearch';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarGroups from './pages/CarGroups';
import DailyOverview from './pages/DailyOverview';
import Pickup from './pages/Pickup';
import RentalOffices from './pages/RentalOffices';
import Schedule from './pages/Schedule';
import TransferRequest from './pages/TransferRequest';
import Walkins from './pages/Walkins';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bookings" component={Bookings}/>
          <Route exact path="/booking-search" component={BookingSearch}/>
          <Route exact path="/cars" component={Cars}/>
          <Route exact path="/car-groups" component={CarGroups}/>
          <Route exact path="/daily-overview" component={DailyOverview}/>
          <Route exact path="/pick-up" component={Pickup}/>
          <Route exact path="/offices" component={RentalOffices}/>
          <Route exact path="/schedule" compoment={Schedule}/>
          <Route exact path="/transfer" compoment={TransferRequest}/>
          <Route exact path="/walkins" compoment={Walkins}/>

        </Switch>
      </Router>

      <Navigation />
      <Sidebar />
      <div>
      (//**Content goes here */)
      </div>
    </div>
  );
}

export default App;

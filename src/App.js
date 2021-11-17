//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
import Return from './pages/Return';
import RentalOffices from './pages/RentalOffices';
import Schedule from './pages/Schedule';
import TransferRequest from './pages/TransferRequest';
import Walkins from './pages/Walkins';

import Pages from './pages/Pages';


function App() {
  return (
    <div className="App">
      <Navigation /> {/* Navbar goes on top */}
      <Sidebar /> {/* Sidebar on the side */}
      <Router> {/* Then the content on the right */}
        <Routes>
          <Route exact path={Pages.BookingOverview} component={Bookings}/> {/**Booking Overview w/ cards */}
          <Route exact path={Pages.BookingSearch} component={BookingSearch}/> {/**Booking Search - do we need this? */}
          <Route exact path={Pages.Cars} component={Cars}/> {/** Car Overview with Cards */}
          <Route exact path={Pages.CarGroups} component={CarGroups}/> {/** Car Groups Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.DailyOverview} component={DailyOverview}/> {/** Landing-page of the Management Area */}
          <Route exact path={Pages.Pickup} component={Pickup}/> {/**Car Pickup Form, empty */}
          <Route exact path={Pages.RentalOffices} component={RentalOffices}/> {/** Rental Offices Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.Return} compoment={Return}/>  {/**Car Return Form, empty */}
          <Route exact path={Pages.Schedule} compoment={Schedule}/> {/**Giant Schedule, empty */}
          <Route exact path={Pages.TransferRequest} compoment={TransferRequest}/> {/**Transfer Request Form, empty */}
          <Route exact path={Pages.Walkins} compoment={Walkins}/> {/**Walkin Overview */}
          <Route exact path={Pages.Home} component={Home}/> {/* Homepage with three buttons */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

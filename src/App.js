//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Global Components
import Navigation from './components/navigation/navigation'
import Sidebar from './components/sidebar/Sidebar'
import './App.css';

//Pages
import Bookings from './pages/BookingOverview';
import BookingSearch from './pages/BookingSearch';
import Cars from './pages/Cars';
import CarGroups from './pages/CarGroups';
import DailyOverview from './pages/DailyOverview';
import Home from './pages/Home'
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
          <Route exact path={Pages.BookingOverview} element={<Bookings/>}/> {/**Booking Overview w/ cards */}
          <Route exact path={Pages.BookingSearch} element={<BookingSearch/>}/> {/**Booking Search - do we need this? */}
          <Route exact path={Pages.Cars} element={<Cars/>}/> {/** Car Overview with Cards */}
          <Route exact path={Pages.CarGroups} element={<CarGroups/>}/> {/** Car Groups Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.DailyOverview} element={<DailyOverview/>}/> {/** Landing-page of the Management Area */}
          <Route exact path={Pages.Pickup} element={<Pickup/>}/> {/**Car Pickup Form, empty */}
          <Route exact path={Pages.RentalOffices} element={<RentalOffices/>}/> {/** Rental Offices Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.Return} element={<Return/>}/>  {/**Car Return Form, empty */}
          <Route exact path={Pages.Schedule} element={<Schedule/>}/> {/**Giant Schedule, empty */}
          <Route exact path={Pages.TransferRequest} element={<TransferRequest/>}/> {/**Transfer Request Form, empty */}
          <Route exact path={Pages.Walkins} element={<Walkins/>}/> {/**Walkin Overview */}
          <Route exact path="/" compoment= {<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

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
import BookingLanding from './pages/BookingLandingPage';
import RentalLanding from './pages/RentalLandingPage';
import GroupLanding from './pages/GroupLandingPage';


function App() {
  return (
    <div className="App">
      <Router> {/* Then the content on the right */}
      <Navigation /> {/* Navbar goes on top */}
      <Sidebar /> {/* Sidebar on the side */}
        <Routes>
          <Route exact path={Pages.BookingLandingPage} element={<BookingLanding/>}/> {/**Booking Overview w/ cards */}
          <Route exact path={Pages.RentalLandingPage} element={<RentalLanding/>}/> {/**Booking Overview w/ cards */}
          <Route exact path={Pages.GroupLandingPage} element={<GroupLanding/>}/> {/**Booking Overview w/ cards */}
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
          <Route exact path="/" render= {<Home/>}/>
   
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Home from './pages'; */
import Bookings from './pages/bookings';
import BookingSearch from './pages/bookingSearch';
import Cars from './pages/cars';
import CarGroups from './pages/carGroups'
import Schedule from './pages/schedule';

function Routing() {
  return (
    <Router>
      <Routes>{/* 
        <Route path="/" exact component={Home} /> */}
        <Route path="/bookings" component={Bookings} />
        <Route path="/booking-search" component={BookingSearch} />
        <Route path="/car-groups" component={CarGroups} />
        <Route path="/cars" component={Cars} />
        <Route path="/schedule" component={Schedule} />
      </Routes>
    </Router>
  );
}

export default Routing;


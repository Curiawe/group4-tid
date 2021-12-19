//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Global Components
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

//Pages
import Bookings from "./pages/BookingOverview";
import Cars from "./pages/Cars";
import CarGroups from "./pages/CarGroups";
import DailyOverview from "./pages/DailyOverview";
import Home from "./pages/Home";
import RentalOffices from "./pages/RentalOffices";
import Schedule from "./pages/Schedule";
import Walkins from "./pages/Walkins";
import Pages from "./pages/Pages";
import TransferOverview from "./pages/TransferOverview";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <Sidebar /> {/* Sidebar on the side */}
        <Routes>
          <Route exact path={Pages.BookingOverview} element={<Bookings />} />{" "}
          {/**Booking Overview w/ cards */}
          <Route exact path={Pages.Cars} element={<Cars />} />{" "}
          {/** Car Overview with Cards */}
          <Route exact path={Pages.CarGroups} element={<CarGroups />} />{" "}
          {/** Car Groups Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.DailyOverview} element={<DailyOverview />} />{" "}
          {/** Landing-page of the Management Area */}
          <Route
            exact
            path={Pages.RentalOffices}
            element={<RentalOffices />}
          />{" "}
          {/** Rental Offices Overview - deprioritize, because not part of requirements */}
          <Route exact path={Pages.Schedule} element={<Schedule />} />{" "}
          {/**Giant Schedule, empty */}
          <Route
            exact
            path={Pages.TransferOverview}
            element={<TransferOverview />}
          />{" "}
          {/**Transfer Request Form, empty */}
          <Route exact path={Pages.Walkins} element={<Walkins />} />{" "}
          {/**Walkin Overview */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

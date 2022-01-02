//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Global Components
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";

//Pages
import Bookings from "./pages/BookingOverview";
import Cars from "./pages/Cars";
import DailyOverview from "./pages/DailyOverview";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Walkins from "./pages/Walkins";
import Pages from "./pages/Pages";
import TransferOverview from "./pages/TransferOverview";
import YourScanCar from "./pages/YourScanCar";
import parse from "parse";

function App() {
  var Parse = require("parse/node");
  Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
  Parse.serverURL = "https://parseapi.back4app.com/";

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
          <Route
            exact
            path={Pages.DailyOverview}
            element={<DailyOverview />}
          />{" "}
          <Route exact path={Pages.YourScanCar} element={<YourScanCar />} />{" "}
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

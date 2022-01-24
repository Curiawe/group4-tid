import schedule from "../Images/schedule.png";
import { useState, useEffect } from "react";
import Parse from "parse";
import { SubmitButton } from "../components/buttons/ColorButton";
import { IconBody } from "../components/cards/IconBody";
import FeatherIcon from "feather-icons-react";

function Schedule(props) {
  const [readResults, setReadResults] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [foundBookings, setFoundBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const readBookings = async function () {
      setIsLoading(true);
      // Reading parse objects is done by using Parse.Query
      const parseQuery = new Parse.Query("Bookings");
      parseQuery.include("customer");
      parseQuery.include("carGroup");
      parseQuery.include("billAs");
      parseQuery.include("return");
      parseQuery.include("services");
      try {
        let bookings = await parseQuery.find();
        setReadResults(bookings);
        setIsLoading(false);
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
      }
    };
    readBookings();
  }, []);

  const resetBookingView = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Bookings");
    parseQuery.include("customer");
    parseQuery.include("carGroup");
    parseQuery.include("billAs");
    parseQuery.include("return");
    parseQuery.include("services");
    try {
      let bookings = await parseQuery.find();
      setReadResults(bookings);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  /* 
  const deleteBooking = async function (bookingId) {
    // Create a new Todo parse object instance and set todo id
    const Booking = new Parse.Object("Bookings");
    Booking.set("objectId", bookingId);
    // .destroy should be called to delete a parse object
    try {
      await Booking.destroy();
      alert("Success! Booking deleted!");
      // Refresh to-dos list to remove this one
      readBookings();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error ${error.message}`);
      return false;
    }
  };*/

  const doQueryByName = async function (e) {
    // Create our Parse.Query instance so methods can be chained
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Bookings");

    // `contains` is a basic query method that checks if string field
    // contains a specific substring

    parseQuery.matches("ref", e, "i");

    try {
      let profiles = await parseQuery.find();
      setReadResults(profiles);
      console.log(readResults);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const bookingSearch = () => {
    if (searchInput == null) return;
    const foundBookings = doQueryByName(searchInput);
    setFoundBookings(foundBookings);
  };

  const statusBooked = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Bookings");
    parseQuery.matches("status", "Booked");
    try {
      let booked = await parseQuery.find();
      setReadResults(booked);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const statusPickedUp = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Bookings");
    parseQuery.matches("status", "Picked up");
    try {
      let booked = await parseQuery.find();
      setReadResults(booked);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
    <div>
      <div className="pageTitle">
        <h1>Schedule</h1>
      </div>
      <div className="pageContent">
        <div className="searchBar">
          <div className="inputFieldSearch">
            <input
              type="search"
              placeholder="Booking reference"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => bookingSearch()}
            className="darkBlueBtn"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => statusBooked()}
            className="darkBlueBtn"
          >
            Status Booked
          </button>
          <button
            type="button"
            onClick={() => statusPickedUp()}
            className="darkBlueBtn"
          >
            Status Picked Up
          </button>
          <button
            type="button"
            onClick={() => resetBookingView()}
            className="darkBlueBtn"
          >
            Reset
          </button>
        </div>
        <div className="scrollableContainer">
          <div className="bookingCardPageMargin">
            {isLoading &&
            readResults !== undefined &&
            readResults.length <= 0 ? (
              <p> Loading bookings...</p>
            ) : (
              readResults !== undefined &&
              readResults.map((profile, index) => (
                <div key={`${index}`} className="bookingCardMargin">
                  <div className="bookingCard">
                    <div className="cardBodyBooking">
                      <div className="h4Booking">
                        {" "}
                        BOOKING {`${profile.get("ref")}`}
                      </div>
                      <div className="cardBodyMargin">
                        <div className="cardBookingColumn1">
                          <div className="p2Booking">Customer</div>
                          <div className="p1Booking">
                            {" "}
                            {`${profile.get("customer").get("name")}`}
                          </div>
                          <IconBody
                            title={`${profile.get("customer").get("phone")}`}
                            icon="phone"
                          />
                        </div>
                        <div className="cardBookingColumn2">
                          <div className="p2Booking">Status</div>
                          <div className="subHead">{`${profile.get(
                            "status"
                          )}`}</div>
                        </div>
                        <div className="cardBookingColumn1">
                          <div className="p2Booking">Pickup</div>
                          <IconBody
                            title={`${profile.get("pickup")["location"]}`}
                            icon="map-pin"
                          />
                          <IconBody
                            title={`${profile.get("pickup")["time"]}`}
                            icon="calendar"
                          />
                        </div>
                        <div className="cardBookingColumn2">
                          <div className="p2Booking">Return</div>
                          <IconBody
                            title={`${profile.get("return")["location"]}`}
                            icon="map-pin"
                          />
                          <IconBody
                            title={`${profile.get("return")["time"]}`}
                            icon="calendar"
                          />
                        </div>
                        <div className="cardBookingColumn1">
                          <div className="p2Booking">Car Group</div>
                          <div className="p1Booking">{`${profile
                            .get("carGroup")
                            .get("name")}`}</div>
                        </div>
                        <div className="cardBookingColumn2">
                          {`${profile.get("services")["mileage"]}`}
                          {`${profile.get("services")["extraDriver"]}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {!isLoading &&
            readResults !== undefined &&
            readResults.length <= 0 ? (
              <p>{"No results here!"}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

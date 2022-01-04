import { useEffect, useState } from "react";
import "./cards.css";
import BookingCard from "./CardsForBooking";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BOOKINGS } from "../../data/bookings";
import PickupModal from "../modals/pickupModal";
import ReturnModal from "../modals/returnModal";
import BookingModal from "../modals/bookingModal";
import SearchBar from "../inputfields+dropdowns/searchBar";
import ManageBookingModal from "../modals/manageBookingModal";
import FetchFunctions from "../DB-functions/FetchFunctions";

import Parse from "parse";

function BookingOverviewCont() {
  const [selectedBooking, setSelectedBooking] = useState("");
  const [bookingState, setBookingState] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [showManageBookingModal, setShowManageBookingModal] = useState(false);

  let cards = []; // cards
  let bookings = [] // booking references 


  // Closing the modals on escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowPickupModal(false);
      setShowReturnModal(false);
      setShowBookingModal(false);
      setShowManageBookingModal(false);
    }
  });

  function handleSelect(e, ref) {
    e.preventDefault();
    if (selectedBooking === ref) {
      //if I want to set it to the same thing again

      setSelectedBooking("");
      // clear the selection instead
    } else {
      setSelectedBooking(ref);
    }
  }

  console.log(
    "Booking and booking Status: " + selectedBooking + ": " + bookingState
  );

  function handleSelect(e, ref) {
    e.preventDefault();
    if (selectedBooking === ref) {
      //if I want to set it to the same thing again
      setSelectedBooking(""); // clear the selection instead
      setBookingState("");
    } else {
      setSelectedBooking(ref);
      setBookingState(FetchFunctions.fetchBookingFromRef(ref).Status);
    }
  }

  function handlePickupSelect() {
    setSelectedBooking("");
    setShowPickupModal(false);
  }

  async function dbCall() {
    const Bookings = Parse.Object.extend("Bookings"); // we first create a class reference for our desired table(s)
    const query = new Parse.Query(Bookings); // we then initialize a query object for our desired table
    query.select("ref"); // we only want the booking references
    bookings = []
    const bookingRefs = await query.find();

    bookingRefs.map(function (booking) {
      const ref = booking.get("ref");
      console.log("Ref: " + ref)
      bookings.push(ref)
    });
    console.log(bookings);
    makeCards();
  }

  dbCall();
  
  function makeCards() {
    cards = []
    console.log("using Effect")
    bookings.map((bkng) => {
      cards.push(
        <div key={bkng} className="cardMargin">
          <BookingCard
            booking={bkng}
            onClick={(e, ref) => handleSelect(e, ref)}
            className={selectedBooking === bkng ? "cardActive" : "card"}
          />
        </div>
      );
      return null;
    })  
  }


  return (
    <>
      <div className="pageTitle">
        <h1>Booking Overview</h1>
      </div>
      <div className="pageContent">
        <div className="bookingOvButtons">
          <div className="bookingOvBtn1">
            <SearchBar
              placeholder="Search bookings"
              onChange={(e) => console.log(e.target.value)} // To-Do: implement search
            />
          </div>
          <div className="bookingOvBtn2">
            <ButtonOnChange
              color="PurpleBtn"
              primary="true"
              className="buttonMedium"
              title="Pickup"
              onClick={() => setShowPickupModal(true)}
            />
            <PickupModal
              showPickupModal={showPickupModal}
              onClose={() => setShowPickupModal(false)}
              onConfirm={() => handlePickupSelect()}
              selectedBooking={selectedBooking}
              bookingStatus={bookingState}
              setBookingState={(input) => setBookingState(input)}
            ></PickupModal>
            <ButtonOnChange
              color="LightBlueBtn"
              primary="true"
              className="buttonMedium"
              title="Return"
              onClick={() => setShowReturnModal(true)}
            />
            <ReturnModal
              showReturnModal={showReturnModal}
              onClose={() => setShowReturnModal(false)}
              onConfirm={() => setShowReturnModal(false)}
              selectedBooking={selectedBooking}
              bookingStatus={bookingState}
              setBookingState={(input) => setBookingState(input)}
            ></ReturnModal>
            <ButtonOnChange
              color="DarkBlueBtn"
              primary="false"
              className="buttonMedium"
              title="Edit"
              onClick={() => setShowManageBookingModal(true)}
            />
            <ManageBookingModal
              showManageBookingModal={showManageBookingModal}
              onClose={() => setShowManageBookingModal(false)}
              selectedBooking={selectedBooking}
            ></ManageBookingModal>
            <ButtonOnChange
              color="DarkBlueBtn"
              primary="true"
              className="buttonMedium"
              title="Add Booking"
              onClick={() => setShowBookingModal(true)}
            />
            <BookingModal
              showBookingModal={showBookingModal}
              onClose={() => setShowBookingModal(false)}
            ></BookingModal>
          </div>
        </div>
        <span style={{ marginTop: "32px" }}>
          {" "}
          Selected Booking: {selectedBooking}
        </span>
        <div className="bookingCardMargin">{cards}</div>
      </div>
    </>
  );
}

export default BookingOverviewCont;

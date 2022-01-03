import { useState } from "react";
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

function BookingOverviewCont() {
  const cards = [];
  const [selectedBooking, setSelectedBooking] = useState("");
  const [bookingState, setBookingState] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [showManageBookingModal, setShowManageBookingModal] = useState(false);

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

  BOOKINGS.map((bkng) => {
    cards.push(
      <div key={bkng.Ref} className="cardMargin">
        <BookingCard
          booking={bkng.Ref}
          onClick={(e, ref) => handleSelect(e, ref)}
          className={selectedBooking === bkng.Ref ? "cardActive" : "card"}
        />
      </div>
    );
    return null;
  });

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
        <div className="bookingCardMargin">{cards}</div>
      </div>
    </>
  );
}

export default BookingOverviewCont;

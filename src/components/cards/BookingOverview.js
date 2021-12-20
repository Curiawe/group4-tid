import { useState } from "react";
import "./cards.css";
import BookingCard from "./CardsForBooking";
import { ButtonOnChange } from "../buttons/ColorButton";
import BOOKINGS from "../../data/bookings";
import PickupModal from "../modals/pickupModal";
import ReturnModal from "../modals/returnModal";
import BookingModal from "../modals/bookingModal";
import SearchBar from "../inputfields+dropdowns/searchBar";

function BookingOverviewCont() {
  const cards = [];
  const [selectedBooking, setSelectedBooking] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  function handleSelect(e, ref) {
    e.preventDefault();
    if (selectedBooking === ref) {
      //if I want to set it to the same thing again
      setSelectedBooking(""); // clear the selection instead
    } else {
      setSelectedBooking(ref);
    }
  }

  BOOKINGS.map((bkng) => {
    cards.push(
      <div key={bkng.Ref} className="cardMargin">
        <BookingCard
          booking={bkng.Ref}
          onClick={(e, ref) => handleSelect(e, ref)}
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
      <div className="pageFilters">
        <SearchBar
          placeholder="Search bookings"
          onChange={(e) => console.log(e.target.value)} // To-Do: implement search
        />

        <div className="bookingOvButtons">
          <div className="bookingOvBtn1">
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
              onConfirm={() => setShowPickupModal(false)}
              selectedBooking={selectedBooking}
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
            ></ReturnModal>
          </div>
        </div>
      </div>

      <span> Selected Booking: {selectedBooking}</span>
      <div className="pageContent">{cards}</div>
    </>
  );
}

export default BookingOverviewCont;

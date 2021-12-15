import { useState } from "react";
import "./cards.css";
import "../booking.css";
import BookingCard from "./CardsForBooking";
import { ButtonOnChange } from "../buttons/ColorButton";
import BOOKINGS from "../../data/bookings";
import PickupModal from "../modals/pickupModal";
import ReturnModal from "../modals/returnModal";
import BookingModal from "../modals/bookingModal";
import SearchBar from "../inputfields+dropdowns/searchBar";

function BookingOverviewCont() {
  const cards = [];
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  BOOKINGS.map((bkng) => {
    cards.push(
      <div key={bkng.Ref} className="cardMargin">
        <BookingCard booking={bkng.Ref} />
      </div>
    );
    return null;
  });

  return (
    <div style={{ marginLeft: "32px" }}>
      <div className="header">
        <div className="title">
          <h1>Booking Overview</h1>
        </div>
      </div>
      <div className="searchBarMargin">
        <div className="searchElements">
          <SearchBar
            placeholder="Search bookings"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

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
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonMedium"
            title="Edit"
            onClick={""}
          />
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
  );
}

export default BookingOverviewCont;

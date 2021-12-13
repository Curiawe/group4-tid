import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BookingPickup } from "./bookingComponents/pickupInfo";
import { BookingReturn } from "./bookingComponents/returnInfo";
import { BookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";

const BookingModal = (props) => {
  if (!props.showBookingModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>New Booking</h3>
          <p>bookingID</p>
        </div>

        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <BookingPickup />
                <BookingReturn />
                <BookingCarGroup />
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <BookingCustomerInfo />
              </div>
            </div>
          </div>
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Cancel"
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Confirm Booking"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

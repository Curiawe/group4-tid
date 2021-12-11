import React from "react";
import { ButtonOnChange } from "../buttons/ColorButton";
import { InputField, TextArea } from "../inputfields+dropdowns/inputFields";
import { SelectCarGroup } from "../inputfields+dropdowns/dropDowns";
import OverlayContent from "./modalContent";
import FeatherIcon from "feather-icons-react";
import "./modal.css";

const BookingModal = (props) => {
  if (!props.showBookingModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>New Booking</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <OverlayContent title="Customer Info">CONTENT</OverlayContent>
          <OverlayContent title="Car">
            <FeatherIcon icon="edit" className="icon" />
          </OverlayContent>
          <OverlayContent title="Bill Car As">
            <SelectCarGroup />
          </OverlayContent>
          <OverlayContent title="Starting Mileage">
            <InputField type="number" placeHolder="Starting Mileage in km" />
          </OverlayContent>
          <OverlayContent title="Starting Fuel">
            <InputField type="number" placeHolder="Starting Fuel Level in %" />
          </OverlayContent>
          <OverlayContent title="Comments">
            <TextArea placeHolder="Comments about the car's state" />
          </OverlayContent>
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Go Back"
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Save & Start"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

import React from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BillCarAs } from "./pickupReturnTransferComponents/billCarAs";
import { SelectedCar } from "./pickupReturnTransferComponents/car";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { StartingMileage } from "./pickupReturnTransferComponents/mileage";
import { StartingFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";

const PickupModal = (props) => {
  if (!props.showPickupModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Pickup</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <CustomerInfo />
          <SelectedCar />
          <BillCarAs />
          <StartingMileage />
          <StartingFuel />
          <Comments />
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

export default PickupModal;

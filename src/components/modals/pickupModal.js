import React from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BillCarAs } from "./pickupReturnTransferComponents/billCarAs";
import { SelectedCar } from "./pickupReturnTransferComponents/car";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { StartingMileage } from "./pickupReturnTransferComponents/mileage";
import { StartingFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import FetchFunctions from "../FetchFunctions";


const PickupModal = (props) => {
  if (!props.showPickupModal) {
    return null;
  } else if (props.showPickupModal && !props.selectedBooking) {
    return (
      <div className="overlay" >
        <div className="overlayContent">
          <div className="overlayTitle" style={{padding:"16px"}}>
            <div style={{marginBottom:"32px"}}>Please select a booking before proceeding with Pickup.</div>
            <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Go back"
            onClick={props.onClose}/>
            </div>
        </div>
      </div>

      )
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Pickup</h3>
          <p>bookingID: {props.selectedBooking}</p>
        </div>
        <div className="overlayBody">
          <CustomerInfo booking={props.selectedBooking}/>
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

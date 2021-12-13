import { React, useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { ReturnFuel } from "./returnComponents/fuelLevel";
import { ReturnComments } from "./returnComponents/comments";
import { ReturnTime } from "./returnComponents/arrivalTime";
import { ReturnMileage } from "./returnComponents/mileage";
import { ReturnCarState } from "./returnComponents/carState";
import { ReturnCustomerInfo } from "./returnComponents/customerInfo";

const ReturnModal = (props) => {
  if (!props.showReturnModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Return</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <ReturnCustomerInfo />
          <ReturnCarState />
          <ReturnTime />
          <ReturnMileage />
          <ReturnFuel />
          <ReturnComments />
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
            title="Register Return"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnModal;

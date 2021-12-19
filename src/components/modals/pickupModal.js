import React, { useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BillCarAs } from "./pickupReturnTransferComponents/billCarAs";
import { SelectedCar } from "./pickupReturnTransferComponents/car";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { StartingMileage } from "./pickupReturnTransferComponents/mileage";
import { StartingFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { CarGroupPickup } from "./pickupReturnTransferComponents/carGroup";

function PickupModal(props) {
  const [billAs, setBillAs] = useState();

  if (!props.showPickupModal) {
    return null;
  }

  console.log("car group: " + billAs);

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Pickup</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <CustomerInfo />
          <CarGroupPickup carGroup="*CarGroup*" />
          <SelectedCar />
          <BillCarAs
            billAs={billAs}
            onChangeBillAs={(newBillAs) => {
              setBillAs(newBillAs);
            }}
          />
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
}

export default PickupModal;

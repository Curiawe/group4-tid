import { React } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { TransferCar } from "./pickupReturnTransferComponents/car";
import { TransferLocation } from "./pickupReturnTransferComponents/transferLocation";
import { TransferDate } from "./pickupReturnTransferComponents/transferDate";
import { TransferComments } from "./pickupReturnTransferComponents/comments";
import { TransferType } from "./pickupReturnTransferComponents/transferType";

const TransferModal = (props) => {
  if (!props.showRequestModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Transfer</h3>
          <p>transferID</p>
        </div>
        <div className="overlayBody">
          <TransferType />
          <TransferCar />
          <TransferLocation />
          <TransferDate />
          <TransferComments />
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonMedium"
            title="Go Back"
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Send Request"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export { TransferModal };

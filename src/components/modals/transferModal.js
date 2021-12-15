import { React, useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { TransferCarGroup } from "./pickupReturnTransferComponents/carGroup";
import { TransferLocation } from "./pickupReturnTransferComponents/transferLocation";
import { TransferLocation } from "./pickupReturnTransferComponents/transferLocation";
import { TransferDate } from "./pickupReturnTransferComponents/transferDate";
import { TransferComments } from "./pickupReturnTransferComponents/transferComments";
import { TransferType } from "./pickupReturnTransferComponents/transferType";

const TransferModal = (props) => {
  if (!props.showTransferModal) {
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
          <TransferCarGroup />
          <TransferLocation />
          <TransferDate />
          <TransferComments />
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
            title="Send Request"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default TransferModal;

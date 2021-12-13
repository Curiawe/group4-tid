import { React, useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { TransferType } from "./transferComponents/transferType";
import { TransferCarGroup } from "./transferComponents/carGroup";
import { TransferLocation } from "./transferComponents/transferLocation";
import { TransferLocation } from "./transferComponents/transferLocation";
import { TransferDate } from "./transferComponents/transferDate";
import { TransferComments } from "./transferComponents/transferComments";

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

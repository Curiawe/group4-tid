import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";

function SelectCar(props) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [licenseID, setLicenseID] = useState();
  const [licenseIssueDate, setIssueDate] = useState();
  const [licenseExpirationDate, setExpirationDate] = useState();

  if (!props.showSelectCarModal) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="customerInfoContent">
        <div className="overlayTitle">
          <h3>Select a Car</h3>
          <p>Booking ID</p>
        </div>

        <div className="overlayBody">hello</div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Cancel"
            onClick={props.onClose}
          />
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Save Customer"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export { SelectCar };

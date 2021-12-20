import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { CARS } from "../../data/cars";
import LargeCardBody from "../cards/CardsForOverview";

function SelectCar(props) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [licenseID, setLicenseID] = useState();
  const [licenseIssueDate, setIssueDate] = useState();
  const [licenseExpirationDate, setExpirationDate] = useState();

  const cards = [];

  CARS.map((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMargin">
        <LargeCardBody car={selCar.License} />
      </div>
    );
  });

  if (!props.showSelectCarModal) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="carContent">
        <div className="overlayTitle">
          <h3>Select a Car</h3>
        </div>

        <div className="carBody">
          <div className="cardContainer">{cards}</div>
        </div>
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

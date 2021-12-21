import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { CARS } from "../../data/cars";
import LargeCardBody from "../cards/CardsForOverview";

function SelectCar(props) {
  const cards = [];
  const [selectedCar, setSelectedCar] = useState("");

  function handleSelectCar(e, license) {
    e.preventDefault();
    if (selectedCar === license) {
      //if I want to set it to the same thing again
      setSelectedCar(""); // clear the selection instead
    } else {
      setSelectedCar(license);
    }
  }

  CARS.map((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMargin">
        <LargeCardBody
          car={selCar.License}
          onClick={(e, license) => handleSelectCar(e, license)}
        />
      </div>
    );
    return null;
  });

  if (!props.showSelectCarModal) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="carContent">
        <div className="overlayTitle">
          <h3>Select a Car</h3>
          <span> Selected car: {selectedCar}</span>
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
            title="Select Car"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export { SelectCar };

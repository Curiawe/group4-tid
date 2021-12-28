import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange } from "../buttons/ColorButton";
import LargeCardBody from "../cards/CardsForOverview";
import ShowAvailableCars from "../cards/SelectCar";

function SelectCar(props) {
  const cards = [];
  const [car, setSelectedCarLicense] = useState("");
  let cars = ShowAvailableCars(props.booking)

  function handleSelectCar(e, license) {
    e.preventDefault();
    if (car === license) {
      //if I want to set it to the same thing again
      setSelectedCarLicense(""); // clear the selection instead
      props.onSelect(null)
    } else {
      setSelectedCarLicense(license);
      props.onSelect(license)
    }
  }

  if (cars) {
      cars.map((selCar) => {
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
  } else {
    cards.push(<h3>No Cars Available today. Talk to Manager</h3>)
  }


  if (!props.showSelectCarModal) {
    return null;
  }

  console.log(car);

  return (
    <div className="overlay">
      <div className="carContent">
        <div className="overlayTitle">
          <h3>Select a Car</h3>
          <span> Selected car: {car}</span>
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
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Select Car"
            onClick={props.onConfirm}
            car={props.car}
          />
        </div>
      </div>
    </div>
  );
}

export { SelectCar };

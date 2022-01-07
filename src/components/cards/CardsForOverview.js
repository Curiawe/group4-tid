import "./cards.css";
import { React, useState } from "react";
import { ButtonNoLink } from "../buttons/ColorButton";
import { IconBody } from "./IconBody";
import { CARS } from "../../data/cars";
import ColorIcon from "./AvailabilityIcon";
import { Icon } from "@iconify/react";
import pickTransfer from "../DB-functions/walkinRes";

let CAR = CARS;

/* Returns car cards for the car overview */
function LargeCardBody(props) {
  let car = CARS[0];
  const [active, setActive] = useState(false);
  const [reserveWalkin, setReserveWalkin] = useState();

  CAR.map((selCar) => {
    if (selCar.License === props.car) {
      car = selCar;
    }
    return null;
  });

  let usedCarGroup = car.carGroup;

  function handleClick(e) {
    setActive(!active);
    props.onClick(e, car.License);
  }

  function handleReserve(e) {
    setReserveWalkin(!reserveWalkin);
    pickTransfer.updateCarWalkin(car.License, !car.resWalkin) // should update this in car
    props.onClick(e);
  }

  function buttonColor() {
    if (reserveWalkin === true) {
      return "GrayBtn";
    } else {
      return "PurpleBtn";
    }
  }

  function buttonString() {
    if (reserveWalkin === true) {
      return "Reserved";
    } else {
      return "Reserve for Walk-in";
    }
  }
  
  return (
    <div className={props.className} onClick={(e) => handleClick(e)}>
      <img className="cardImg" src={car.Image} alt="carpic" />
      <div className="h4Large"> {car.Model} </div>
      <div className="p1Large"> {usedCarGroup.name}</div>
      <div className="p2"> {car.License} </div>
      <div className="cardBodyLarge">
        <div className="iconRow">
          <IconBody title={usedCarGroup.Seats} icon="user" />
          <IconBody title={usedCarGroup.Baggage} icon="briefcase" />
          <div className="iconBody">
            <div className="mainIcons">
              <Icon icon="mdi:car-door" width="23.07px" height="25.01px" />
            </div>
            <div className="mainDescription">5</div>
          </div>
        </div>

        <div className="iconRow">
          <IconBody title={car.fuelType} icon="droplet" />
          <IconBody title="Manual" icon="settings" />
          <ColorIcon title={car.Color} />
        </div>
        <div className="iconRow">
          <IconBody title={car.Location.Location} icon="map-pin" />
        </div>
        <div className="iconRow">
          <ColorIcon title={car.Status} />
        </div>
      </div>
      <div className="btnMargin">
        <ButtonNoLink
          color={buttonColor()}
          primary="false"
          className="buttonSmall"
          title={buttonString()}
          onClick={() => handleReserve()}
        />
      </div>
    </div>
  );
}

/* Returns car cards for the selectCarModal in the pick-up workflow */
function SelectCarCards(props) {
  let car = CARS[0];
  const [active, setActive] = useState(false);

  CAR.map((selCar) => {
    if (selCar.License === props.car) {
      car = selCar;
    }
    return null;
  });

  let usedCarGroup = car.carGroup;

  function handleClick(e) {
    setActive(!active);
    props.onClick(e, car.License);
  }

  return (
    <div className={props.className} onClick={(e) => handleClick(e)}>
      <img className="cardImg" src={car.Image} alt="carpic" />
      <div className="h4Large"> {car.Model} </div>
      <div className="p1Large"> {usedCarGroup.name}</div>
      <div className="p2"> {car.License} </div>
      <div className="cardBodyLarge">
        <div className="iconRow">
          <IconBody title={usedCarGroup.Seats} icon="user" />
          <IconBody title={usedCarGroup.Baggage} icon="briefcase" />
          <div className="iconBody">
            <div className="mainIcons">
              <Icon icon="mdi:car-door" width="23.07px" height="25.01px" />
            </div>
            <div className="mainDescription">5</div>
          </div>
        </div>

        <div className="iconRow">
          <IconBody title={car.fuelType} icon="droplet" />
          <IconBody title="Manual" icon="settings" />
          <ColorIcon title={car.Color} />
        </div>
        <div className="iconRow">
          <IconBody title={car.Location.Location} icon="map-pin" />
        </div>
        <div className="iconRow">
          <ColorIcon title={car.Status} />
        </div>
      </div>
    </div>
  );
}

export { LargeCardBody, SelectCarCards };

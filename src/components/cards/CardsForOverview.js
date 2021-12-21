import "./cards.css";
import { React, useState } from "react";
import { ButtonStyled } from "../buttons/ColorButton";
import { IconBody } from "./IconBody";
import Pages from "../../pages/Pages";
import { CARS } from "../../data/cars";
import ColorIcon from "./AvailabilityIcon";
import { Icon } from "@iconify/react";

let CAR = CARS;

function LargeCardBody(props) {
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
    <div className="card" onClick={(e) => handleClick(e)}>
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
        <ButtonStyled
          link=""
          color="PurpleBtn"
          primary="false"
          className="buttonSmall"
          title="Select car"
        />
      </div>
    </div>
  );
}

export default LargeCardBody;

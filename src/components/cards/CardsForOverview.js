import "./cards.css";
import { ButtonStyled } from "../buttons/ColorButton";
import { IconBody } from "./IconBody";
import Pages from "../../pages/Pages";
import { CARS } from "../../data/cars";
import ColorIcon from "./AvailabilityIcon";
import { Icon } from "@iconify/react";

let CAR = CARS;

function LargeCardBody(props) {
  let car = CARS[0];

  CAR.map((selCar) => {
    if (selCar.License === props.car) {
      car = selCar;
    }
    return null;
  });

  let usedCarGroup = car.carGroup;

  return (
    <div className="card">
      <img className="cardImg" src={props.src} alt="carpic" />
      <div className="h4Large"> {car.Model} </div>
      <div className="p1Large"> {usedCarGroup[0]}</div>
      <div className="p2"> {car.License} </div>
      <div className="cardBodyLarge">
        <div className="iconRow">
          <IconBody title={usedCarGroup[1]} icon="user" />
          <IconBody title={usedCarGroup[2]} icon="briefcase" />
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
          <IconBody title={car.Location[0]} icon="map-pin" />
        </div>
        <div className="iconRow">
          <ColorIcon title={car.Status} />
        </div>
      </div>
      <div className="btnMargin">
        <ButtonStyled
          link={Pages.Walkins}
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

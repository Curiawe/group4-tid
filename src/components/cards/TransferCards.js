import "./cards.css";
import { ButtonStyled } from "../buttons/ColorButton";
import { IconBody } from "./IconBody";
import Pages from "../../pages/Pages";
import { CARS } from "../../data/cars";
import ColorIcon from "./AvailabilityIcon";
import { TRANSFERS } from "../../data/transfer";

let CAR = CARS;
let TRANSFER = TRANSFERS;

function TransferCardBody(props) {
  let car = CARS[0];

  CAR.map((selCar) => {
    if (selCar.License === props.car) {
      car = selCar;
    }
    return null;
  });

  let transfer = TRANSFERS[0];
  TRANSFER.map((trans) => {
    if (trans.Car === props.car) {
      transfer = trans;
    }
    return null;
  });

  let usedCarGroup = car.carGroup;

  return (
    <div className="card">
      <img className="cardImg" src={car.Image} alt="carpic" />
      <div className="h4Large"> {car.Model} </div>
      <div className="p1Large"> {usedCarGroup[0]}</div>
      <div className="p2"> {car.License} </div>
      <div className="cardBodyLarge">
        <div className="iconRow">
          <IconBody title={car.fuelType} icon="droplet" />
          <IconBody title="Manual" icon="settings" />
          <ColorIcon title={car.Color} />
        </div>
        <div className="iconRow">
          <IconBody title={transfer.Outgoing.Location} icon="map-pin" />
          <IconBody title="(Outgoing)" />
        </div>
        <div className="iconRow">
          <IconBody title={transfer.Incoming.Location} icon="map-pin" />
          <IconBody title="(Incoming)" />
        </div>
        <div className="iconRow">
          <ColorIcon title={car.relStatus} />
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

export default TransferCardBody;

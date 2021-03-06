import "./cards.css";
import { IconBody } from "./IconBody";
import { CARS } from "../../data/cars";
import ColorIcon from "./AvailabilityIcon";
import { TRANSFERS } from "../../data/transfer";

let CAR = CARS;
let TRANSFER = TRANSFERS;

/* Returns car cards for the transfer overview */
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
    if (trans.Car.License === props.car) {
      transfer = trans;
    }
    return null;
  });

  let usedCarGroup = car.carGroup;

  return (
    <div className="cardNonHover">
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
          <p className="mainDescription"> {"(Outgoing)"} </p>
        </div>
        <div className="iconRow">
          <IconBody title={transfer.Incoming.Location} icon="map-pin" />
          <p className="mainDescription"> {"(Incoming)"} </p>
        </div>
        <div className="iconRow">
          <ColorIcon title={car.relStatus} />
        </div>
      </div>
    </div>
  );
}

export default TransferCardBody;

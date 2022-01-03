import "../modal.css";
import { BookingComponent } from "./skeleton";
import { bookingPrice } from "../../priceCalc";
import { Underline } from "react-feather";

function Price(props) {
  let returnDate = props.returnDate;
  let pickupDate = props.pickupDate;
  let carGroup = props.carGroup;
  let extraDriver = props.extraDriver;
  let extraMileage = props.extraMileage;

  return (
    <BookingComponent title="Price">
      <div className="rowButton" style={{ fontSize: "12px" }}>
        <div>Hourly rate for {carGroup}:</div>
        <div>
          {" "}
          {
            bookingPrice(
              returnDate,
              pickupDate,
              carGroup,
              extraDriver,
              extraMileage
            )[2]
          }{" "}
          DKK
        </div>
      </div>
      <div className="rowButton" style={{ fontSize: "12px" }}>
        <div></div>
        <div>
          x{" "}
          {
            bookingPrice(
              returnDate,
              pickupDate,
              carGroup,
              extraDriver,
              extraMileage
            )[3]
          }{" "}
          hours
        </div>
      </div>
      <div className="rowButton" style={{ fontSize: "12px" }}>
        <div>Deposit:</div>
        <div>
          {" "}
          {
            bookingPrice(
              returnDate,
              pickupDate,
              carGroup,
              extraDriver,
              extraMileage
            )[0]
          }{" "}
          DKK
        </div>
      </div>
      <br />
      <div className="rowButton">
        <div>Total:</div>
        <div style={{ borderBottom: "3px double", fontWeight: "bolder" }}>
          {" "}
          {
            bookingPrice(
              returnDate,
              pickupDate,
              carGroup,
              extraDriver,
              extraMileage
            )[1]
          }{" "}
          DKK
        </div>
      </div>
    </BookingComponent>
  );
}

export { Price };

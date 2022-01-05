import "../modal.css";
import { BookingComponent } from "./skeleton";
import { bookingPrice } from "../../priceCalc";
import { useEffect } from "react";

function Price(props) {
  let returnDate = props.returnDate;
  let returnTime = props.returnTime;
  let pickupDate = props.pickupDate;
  let pickupTime = props.pickupTime;
  let carGroup = props.carGroup;
  let extraDriver = props.extraDriver;
  let extraMileage = props.extraMileage;
  let price = bookingPrice(
    returnDate,
    returnTime,
    pickupDate,
    pickupTime,
    carGroup,
    extraDriver,
    extraMileage
  );

  useEffect(() => {
    props.onChangePrice(price[1]);
  });

  return (
    <BookingComponent title="Price" price={price}>
      <div className="rowButton" style={{ fontSize: "12px" }}>
        <div>Hourly rate for {carGroup}:</div>
        <div>
          {" "}
          {
            bookingPrice(
              returnDate,
              returnTime,
              pickupDate,
              pickupTime,
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
              returnTime,
              pickupDate,
              pickupTime,
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
              returnTime,
              pickupDate,
              pickupTime,
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
              returnTime,
              pickupDate,
              pickupTime,
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

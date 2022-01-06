import { useEffect, useState } from "react";
import "./modal.css";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { Overlay } from "../modals/pickupReturnTransferComponents/pickupReturnTransferSkeleton";
import { ReturnFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { ReturnTime } from "./pickupReturnTransferComponents/arrivalTime";
import { ReturnMileage } from "./pickupReturnTransferComponents/mileage";
import { Price } from "./bookingComponents/price";

import { bookingStates } from "../../data/bookingStates";
import FetchFunctions from "../DB-functions/FetchFunctions";
import FeatherIcon from "feather-icons-react";
import updateEntries from "../DB-functions/UpdateEntries";
import timeStringFromDate from "../dataHandling/timeStringFromDate";

const ReturnModal = (props) => {

  const [arrivalTime, setArrivalTime] = useState("");
  const [returnMileage, setMileage] = useState(0);
  const [returnFuel, setFuel] = useState(100);
  const [returnComment, setComment] = useState("");
  const [price, setPrice] = useState(0)

  let booking =  FetchFunctions.fetchBookingFromRef(props.selectedBooking);
  let selectedCar;
  if (props.selectedBooking) {
    selectedCar = booking.Car;
  }

  function onClickOverrideStatus(e) {
    e.preventDefault();
    alert(
      `Opening Return for booking ${props.selectedBooking}. If you opened this view by accident, select 'Cancel'.`
    );
    props.setBookingState(bookingStates.PICKEDUP);
  }

  function handleTime(){
    let day = new Date();
    day.setHours(parseInt(arrivalTime.substring(0,2)),parseInt(arrivalTime.substring(3,5)),0,0)
    return day
  }

  function returnTimeForPrice() {
    if (arrivalTime > timeStringFromDate(booking.Return.time)) {
      return arrivalTime } else {
        return booking.Return.time
      }
  }

  function handlePriceChange(newPrice) {
    console.log(price);
    setPrice(newPrice);
    console.log(price);
  }

  function handleConfirm(){
    updateEntries.updateBookingForReturn(props.selectedBooking, handleTime(), returnMileage, returnFuel, returnComment, price);
    props.onConfirm();
  }

  function handleClose() {
    setArrivalTime("");
    setMileage(0);
    setFuel(0);
    setComment("");
    setPrice(0)
    props.onClose();
  }

  function carText() {
    let returnString = "";
    if (selectedCar) {
      returnString = selectedCar.License + " (" + selectedCar.Model + ")";
    } else {
      returnString = `Please select a car under "Pickup" or "Edit."`;
    }
    return returnString;
  }

  if (!props.showReturnModal) {
    return null;
  } else if (props.showReturnModal && !props.selectedBooking) {
    return (
      <div className="overlay">
        <div className="popupBlue">
          <div className="overlayTitle">
            <FeatherIcon icon="alert-triangle" />
          </div>
          <div className="popupBody">
            Please select a booking before proceeding with Return.
          </div>
          <div className="buttonCenter">
            <ButtonOnChange
              color="LightBlueBtn"
              primary="true"
              className="buttonLarge"
              title="Go back"
              onClick={props.onClose}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.showReturnModal && props.selectedBooking) {

    if (props.bookingStatus !== bookingStates.PICKEDUP) {
      return (
        <div className="overlay">
          <div className="popupBlue">
            <div className="overlayTitle">
              <FeatherIcon icon="alert-triangle" />
            </div>
            <div className="popupBody">
              This booking cannot be returned. It is currently{" "}
              <strong>"{props.bookingStatus}"</strong>. A booking should be
              "Picked up" for you to be able to return it.
            </div>
            <div className="buttonLeft">
              <ButtonOnChange
                color="LightBlueBtn"
                primary="true"
                className="buttonMedium"
                title="Go Back"
                onClick={props.onClose}
              />
            </div>
            <div className="buttonRight">
              <ButtonNoLink
                color="DarkRedBtn"
                primary="true"
                className="buttonSmall"
                title="Return Anyway"
                onClick={(e) => onClickOverrideStatus(e)}
              />
            </div>
          </div>
        </div>
      );
    } else {

  }
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Return Booking {props.selectedBooking}</h3>
        </div>
        <div className="overlayBody">
          <Overlay title="Car">
            <div className="rowButton">{carText()}</div>
          </Overlay>
          <ReturnTime
            time={timeStringFromDate(booking.Return.time)}
            returned={arrivalTime}
            setReturned={(time) => setArrivalTime(time)}
          />
          <ReturnMileage onChange={(newMiles) => setMileage(newMiles)}/>
          <ReturnFuel onChange={(newFuel) => setFuel(newFuel)}/>
          <Comments onChange={(newComment) => setComment(newComment)}/>
          <Price
                  returnDate={booking.Return.time}
                  returnTime={returnTimeForPrice()} // FIX
                  pickupDate={booking.Pickup.time}
                  pickupTime={timeStringFromDate(booking.Pickup.time)}
                  carGroup={booking.carGroup.name}
                  extraDriver={booking.Services.driver}
                  extraMileage={returnMileage}
                  price={price}
                  onChangePrice={(newPrice) => {
                    handlePriceChange(newPrice);
                  }}
                />

        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Go Back"
            onClick={() => handleClose()}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Register Return"
            onClick={() => handleConfirm()}
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnModal;

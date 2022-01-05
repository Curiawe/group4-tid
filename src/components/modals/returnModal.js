import { useState } from "react";
import "./modal.css";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { Overlay } from "../modals/pickupReturnTransferComponents/pickupReturnTransferSkeleton";

import { ReturnFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { ReturnTime } from "./pickupReturnTransferComponents/arrivalTime";
import { ReturnMileage } from "./pickupReturnTransferComponents/mileage";

import { ReturnCarState } from "./pickupReturnTransferComponents/carState";

import { bookingStates } from "../../data/bookingStates";
import FetchFunctions from "../DB-functions/FetchFunctions";
import FeatherIcon from "feather-icons-react";

const ReturnModal = (props) => {

  const [arrivalTime, setArrivalTime] = useState("");
  const [returnMileage, setMileage] = useState(0);
  const [returnFuel, setFuel] = useState(100);
  const [returnComment, setComment] = "";

  function onClickOverrideStatus(e) {
    e.preventDefault();
    alert(
      `Opening Return for booking ${props.selectedBooking}. If you opened this view by accident, select 'Cancel'.`
    );
    props.setBookingState(bookingStates.PICKEDUP);
  }

  console.log(returnMileage)
  console.log(returnFuel)

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
    }
  }

  
  let booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);
  let selectedCar = booking.Car;

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Return Booking {props.selectedBooking}</h3>
        </div>
        <div className="overlayBody">
          {/* <CustomerInfo booking={props.selectedBooking}/>  Not required for this*/}
          {/* <ReturnCarState /> Should automatically update*/}
          <Overlay title="Car">
            <div className="rowButton">{carText()}</div>
          </Overlay>
          <ReturnTime
            time={booking.Return.time
              .toLocaleTimeString("en-US")
              .substring(0, 5)}
            returned={arrivalTime}
            setReturned={(time) => setArrivalTime(time)}
          />
          <ReturnMileage onChange={(newMiles) => setMileage(newMiles)}/>
          <ReturnFuel onChange={(newFuel) => setFuel(newFuel)}/>
          <Comments onChange={(newComment) => setComment(newComment)}/>
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Go Back"
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Register Return"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnModal;

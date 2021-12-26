import { React, useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { ReturnFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { ReturnTime } from "./pickupReturnTransferComponents/arrivalTime";
import { ReturnMileage } from "./pickupReturnTransferComponents/mileage";
import { ReturnCarState } from "./pickupReturnTransferComponents/carState";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import FetchFunctions from "../DB-functions/FetchFunctions";
import { bookingStates } from "../../data/bookingStates";

const ReturnModal = (props) => {

  function onClickOverrideStatus (e) {
    e.preventDefault();
    alert(`Opened Pickup for booking ${props.selectedBooking}. If you opened this view by accident, select 'Go Back'.`)
    props.setBookingState("Booked")
  }


  if (!props.showReturnModal) {
    return null;

  } else if (props.showReturnModal && !props.selectedBooking) {
    return (
      <div className="overlay" >
        <div className="overlayContent">
          <div className="overlayTitle" style={{padding:"16px"}}>
            <div style={{marginBottom:"32px"}}>Please select a booking before proceeding with Return.</div>
            <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Go back"
            onClick={props.onClose}/>
            </div>
        </div>
      </div>
      )
  }
  else {
    let stat = FetchFunctions.fetchBookingFromRef(props.selectedBooking).Status
    if (stat !== bookingStates.PICKEDUP) {

      return (
        <div className="overlay">
          <div className="overlayContent" style={{display:"flex", justifyContent:"center", alignContent: "center", textAlign:"center", padding:"32px"}}>
            <div className="overlayBody">
              <h4>Can't return selected booking.</h4>
              <p>This booking cannot be returned. It is currently <strong>"{stat}"</strong>. A booking should be "Picked up" for you to be able to return it.</p>
              <div className="overlayFooter" style={{display:"flex", alignContent:"space-evenly"}}>
                <ButtonOnChange
                    color="DarkBlueBtn"
                    primary="true"
                    className="buttonLarge"
                    title="Go Back"
                    onClick={props.onClose}
                  />
                  <ButtonOnChange
                    color="DarkRedBtn"
                    primary="true"
                    className="buttonSmall"
                    title="Return Anyway"
                    onClick={() => alert("In a perfect world, this would work. But it doesn't, yet. Sorry.")}
                  />

              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="overlay">
          <div className="overlayContent">
            <div className="overlayTitle">
              <h3>Return Booking {props.selectedBooking}</h3>
            </div>
            <div className="overlayBody">
              <CustomerInfo booking={props.selectedBooking}/>
              <ReturnCarState />
              <ReturnTime />
              <ReturnMileage />
              <ReturnFuel />
              <Comments />
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
    }
  }
};

export default ReturnModal;

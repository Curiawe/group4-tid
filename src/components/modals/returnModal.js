import { useState } from "react";
import "./modal.css";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { ReturnFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { ReturnTime } from "./pickupReturnTransferComponents/arrivalTime";
import { ReturnMileage } from "./pickupReturnTransferComponents/mileage";

import { ReturnCarState } from "./pickupReturnTransferComponents/carState";
import { SelectedCar } from "./pickupReturnTransferComponents/car";

import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { bookingStates } from "../../data/bookingStates";
import FetchFunctions from "../DB-functions/FetchFunctions";

const ReturnModal = (props) => {

  const [arrivalTime, setArrivalTime] = useState(new Date(2021,11,26,8,45))
  const [returnMileage, setMileage] = useState(0)
  const [returnFuel, setFuel] = useState(100)
  const [returnComment, setComment] = ("")

  function onClickOverrideStatus (e) {
    e.preventDefault();
    alert(`Opening Return for booking ${props.selectedBooking}. If you opened this view by accident, select 'Cancel'.`)
    props.setBookingState(bookingStates.PICKEDUP)
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



  else if (props.showReturnModal && props.selectedBooking) {
      if (props.bookingStatus !== bookingStates.PICKEDUP){
        return (
          <div className="overlay">
            <div className="overlayContent" style={{display:"flex", justifyContent:"center", alignContent: "center", textAlign:"center", padding:"32px"}}>
              <div className="overlayBody">
                <h4>Can't return selected booking.</h4>
                <p>This booking cannot be returned. It is currently <strong>"{props.bookingStatus}"</strong>. A booking should be "Picked up" for you to be able to return it.</p>
                <div className="overlayFooter" style={{display:"flex", alignContent:"space-evenly"}}>
                  <ButtonOnChange
                      color="DarkBlueBtn"
                      primary="true"
                      className="buttonLarge"
                      title="Go Back"
                      onClick={props.onClose}
                    />
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
          </div>
        )  
      }
    }

    let booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking)
    let car = booking.Car

      return (
        <div className="overlay">
          <div className="overlayContent">
            <div className="overlayTitle">
              <h3>Return Booking {props.selectedBooking}</h3>
            </div>
            <div className="overlayBody">
              <CustomerInfo booking={props.selectedBooking}/>
              {/* <ReturnCarState /> */}
              <SelectedCar selected={car}/> 
              <ReturnTime time={booking.Return.time} returned={arrivalTime} setReturned = {(time) => setArrivalTime(time)}/>
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
};

export default ReturnModal;

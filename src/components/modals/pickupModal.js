import React, { useState } from "react";
import "./modal.css";
import { ButtonOnChange } from "../buttons/ColorButton";
import { BillCarAs } from "./pickupReturnTransferComponents/billCarAs";
import { SelectedCar } from "./pickupReturnTransferComponents/car";
import { CustomerInfo } from "./pickupReturnTransferComponents/customerInfo";
import { StartingMileage } from "./pickupReturnTransferComponents/mileage";
import { StartingFuel } from "./pickupReturnTransferComponents/fuelLevel";
import { Comments } from "./pickupReturnTransferComponents/comments";
import { CarGroupPickup } from "./pickupReturnTransferComponents/carGroup";
import FetchFunctions from "../DB-functions/FetchFunctions";
import { CARGROUPS } from "../../data/carGroups";
import FeatherIcon from "feather-icons-react";
import { SelectCar } from "./selectCarModal";

const PickupModal = (props) => {
  let selectedBooking = FetchFunctions.fetchBookingFromRef(
    props.selectedBooking
  );
  console.log("selected Booking: " + props.selectedBooking);

  function selCarGroup() {
    let group = CARGROUPS[0];
    if (selectedBooking) {
      group = selectedBooking;
      console.log("we have a car Group selected");
    }
    console.log("The selected Car Group is: " + group.name);
    return group;
  }


  const [car, setCar] = useState(null);
  const [carString, setCarString] = useState("")
  const [billAs, setBillAs] = useState(selCarGroup());
  const [mileage, setMileage] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [comment, setComment] = useState("");

  function handleClose(){
    setCar(null)
    setCarString("")
    setMileage(0)
    setFuel(100)
    setComment("")
    props.onClose()
  }


  //Logic:
  /**
   * 1) if the car is selected, update all other states
   * 2) Track other state changes
   * 3) write to booking object
   * 4) write to car object
   * 4) change car status
   * 5) re-direct to success/ do success alert, close modal
   */

  if (!props.showPickupModal) {
    return null;
  } else if (props.showPickupModal && !props.selectedBooking) {
    return (
      <div className="overlay">
        <div className="popupBlue">
          <div className="overlayTitle">
            <FeatherIcon icon="alert-triangle" />
          </div>
          <div className="overlayBody">
            Please select a booking before proceeding with Pickup.
          </div>
          <div className="buttonCenter">
            <ButtonOnChange
              color="DarkBlueBtn"
              primary="true"
              className="buttonLarge"
              title="Go back"
              onClick={props.onClose}
            />
          </div>
        </div>
      </div>
    );
  }

  console.log("car group: " + billAs);
  console.log(" HERE I AM: " + car);

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Pickup</h3>
          <p>Booking: {props.selectedBooking}</p>
        </div>
        <div className="overlayBody">
          {/* Customer Info Works now */}
          <CustomerInfo booking={props.selectedBooking} />
          {/*The SelectedCar here depends on Marìna's "Find Cars" function */}
          <SelectedCar
            selected={carString}
            onSelect={(newCar) => setCarString(newCar)}
            onClickConfirm={(input) => setCar(input)}
            car={car}
          />
          {/* BillCarAs takes the the state and the change function */}
          <BillCarAs
            selected={billAs}
            onChange={(newVal) => setBillAs(newVal)}
          />

          <StartingMileage />
          <StartingFuel />
          <Comments />
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
            title="Save & Start"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default PickupModal;

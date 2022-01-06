import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { ButtonNoLink } from "../../buttons/ColorButton";
import { SelectCar } from "../selectCarModal";
import FetchFunctions from "../../DB-functions/FetchFunctions";

/**
 *
 * @param {*} props selected = a car, onSelect = function passed by pickupModal.js
 * @returns View of the selected car and capabilities to select an available car
 */
function SelectedCar(props) {
  const [showSelectCarModal, setShowSelectCarModal] = useState(false);
  const [currentLicense, setLicense] = useState("")

  /**
   * Checks whether there is a car currently selected and returns the field text accordingly.
   * @returns {String}
   */
  function carText() {
    let returnString = "";
    if (props.car) {
      returnString =
        props.car.License + " (" + props.car.Model + ")";
    } else {
      returnString = "Please select a car";
    }
    return returnString;
  }

  function onCloseResetCar() {
    props.onClickConfirm(null)
    setShowSelectCarModal(false)
  }

  function handleConfirm(){
    if (currentLicense) {
      props.onClickConfirm(FetchFunctions.fetchCarFromLicense(currentLicense));
      setShowSelectCarModal(false)
    } else {
      alert("No car to save.")
      onCloseResetCar()
    }

  }

  function colorString() {
    if (props.car) {
      return "GreenBtn"
    } else {
      return "DarkBlueBtn"
    }
  }

  function buttonString() {
    if (props.car) {
      return "Selected"
    } else {
      return "Select Car"
    }
  }


  return (
    <Overlay title="Car">
      <div className="rowButton">
        {carText()}
        <ButtonNoLink
          className="buttonSmall"
          title={buttonString()}
          primary="true"
          color={colorString()}
          onClick={() => setShowSelectCarModal(true)}
        />{" "}
        <SelectCar
          booking = {props.booking}
          showSelectCarModal={showSelectCarModal}
          onClose={() => onCloseResetCar()}
          onConfirm={() => handleConfirm()}
          onSelect= {(input) => setLicense(input)}
        />
      </div>
    </Overlay>
  );
}

function TransferCar(props) {
  return <Overlay title="Car">here's the car</Overlay>;
}

export { SelectedCar, TransferCar };

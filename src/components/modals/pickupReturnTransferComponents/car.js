import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { ButtonNoLink, ButtonOnChange } from "../../buttons/ColorButton";
import { SelectCar } from "../selectCarModal";
import FetchFunctions from "../../DB-functions/FetchFunctions";
import FeatherIcon from "feather-icons-react";

/**
 *
 * @param {*} props selected = a car, onSelect = function passed by pickupModal.js
 * @returns View of the selected car and capabilities to select an available car
 */
function SelectedCar(props) {
  const [showSelectCarModal, setShowSelectCarModal] = useState(false);

  /**
   * Checks whether there is a car currently selected and returns the field text accordingly.
   * @returns {String}
   */
  function carText() {
    let returnString = "";
    if (props.selectedCar) {
      returnString =
        props.selectedCar.Model + " (" + props.selectedCar.License + ")";
    } else {
      returnString = "Please select a car";
    }
    return returnString;
  }

  function setNewCar(car) {
    props.onSelect(car);
    setShowSelectCarModal(false);
  }

  function carButton() {}

  return (
    <Overlay title="Car">
      <div className="rowButton">
        {carText()}
        <ButtonNoLink
          className="buttonSmall"
          title="Select Car"
          primary="true"
          color="DarkBlueBtn"
          onClick={() => setShowSelectCarModal(true)}
        />{" "}
        <SelectCar
          showSelectCarModal={showSelectCarModal}
          onClose={() => setShowSelectCarModal(false)}
          onConfirm={() => setNewCar(props.car)}
        />
      </div>
    </Overlay>
  );
}

function TransferCar(props) {
  return <Overlay title="Car">here's the car</Overlay>;
}

export { SelectedCar, TransferCar };

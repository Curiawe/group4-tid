import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { ButtonNoLink } from "../../buttons/ColorButton";
import { SelectCar } from "../selectCarModal";

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
    if (props.selected) {
      returnString = props.selected.Model + " (" + props.selected.License + ")";
    } else {
      returnString = "Please select a car";
    }
    return returnString;
  }

  function setNewCar(car) {
    props.onSelect(car);
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
        />
      </div>
      {/**This should open the car modal we don't have, yet. */}
    </Overlay>
  );
}

function TransferCar(props) {
  return <Overlay title="Car">here's the car</Overlay>;
}

export { SelectedCar, TransferCar };

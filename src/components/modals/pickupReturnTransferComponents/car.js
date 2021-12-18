import { Overlay } from "./pickupReturnTransferSkeleton";
import { useState } from "react";
import { ButtonNoLink } from "../../buttons/ColorButton";


/**
 * 
 * @param {*} props selected = a car, onSelect = function passed by pickupModal.js
 * @returns View of the selected car and capabilities to select an available car
 */
function SelectedCar(props) {

  const [showCarModal, setShowCarModal] = useState(false);

  /**
   * Checks whether there is a car currently selected and returns the field text accordingly.
   * @returns {String} 
   */
  function carText () {
    let returnString = ""
    if (props.selected) {
      returnString = props.selected.Model + " (" + props.selected.License + ")"
    } else {
      returnString = "Please Select"
    }
    return returnString
  }

  function setNewCar(car) {
    props.onSelect(car)
  }

  function carButton () {

  }

  return (
    <Overlay title="Car">
      {carText()}
      <ButtonNoLink className="buttonSmall" 
        title="Select Car" primary="true" 
        color="DarkBlueBtn" 
        onClick={() => setShowCarModal(true)}/> {/**This should open the car modal we don't have, yet. */}
    </Overlay>
  );
}

export { SelectedCar };

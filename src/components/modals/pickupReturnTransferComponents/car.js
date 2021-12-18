import { Overlay } from "./pickupReturnTransferSkeleton";
import FeatherIcon from "feather-icons-react";
// Props:
// selected={car} onSelect={(newCar)=> setCar(newCar)}

/**
 * 
 * @param {*} props selected = a car, onSelect = function passed by pickupModal.js
 * @returns View of the selected car and capabilities to select an available car
 */
function SelectedCar(props) {

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
      <FeatherIcon icon="edit" className="icon" />
    </Overlay>
  );
}

export { SelectedCar };

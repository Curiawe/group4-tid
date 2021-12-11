import { React, useState } from "react";
import "./modal.css";
import FeatherIcon from "feather-icons-react";
import { ButtonOnChange } from "../buttons/ColorButton";
import {
  InputFieldSmall,
  TextArea,
} from "../inputfields+dropdowns/inputFields";
import OverlayContent from "./modalContent";
import { SelectCarState } from "../inputfields+dropdowns/dropDowns";
import { CheckBox, TwoRadioButtons } from "../selectionBoxes/selectionBoxes";

const ReturnModal = (props) => {
  const [arrivalTime, setArrivalTime] = useState(false);
  const [aboveMileageLimit, setAboveMileageLimit] = useState(false);
  const [belowFuelLimit, setBelowFuelLimit] = useState(false);

  if (!props.showReturnModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h3>Return</h3>
          <p>bookingID</p>
        </div>
        <div className="overlayBody">
          <OverlayContent title="Car">
            <FeatherIcon icon="edit" className="icon" />
          </OverlayContent>
          <OverlayContent title="Car State">
            <SelectCarState />
          </OverlayContent>
          <OverlayContent title="Arrival Time">
            <TwoRadioButtons
              name="Arrival Time"
              buttonOne="On Time"
              checkedOne={arrivalTime === "On Time"}
              buttonTwo="Late"
              checkedTwo={arrivalTime === "Late"}
              onChange={(e) => {
                setArrivalTime(e.target.value);
              }}
            />
          </OverlayContent>
          <OverlayContent title="Mileage">
            <InputFieldSmall type="number" placeHolder="km" />
            <CheckBox
              name="Mileage"
              buttonText="Above Limit"
              checked={aboveMileageLimit}
              onChange={(e) => setAboveMileageLimit(e.target.checked)}
            />
          </OverlayContent>
          <OverlayContent title="Fuel Level">
            <InputFieldSmall type="number" placeHolder="%" />
            <CheckBox
              name="Mileage"
              buttonText="Below Limit"
              checked={belowFuelLimit}
              onChange={(e) => setBelowFuelLimit(e.target.checked)}
            />
          </OverlayContent>
          <OverlayContent title="Comments">
            <TextArea placeHolder="Comments about the car's state" />
          </OverlayContent>
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

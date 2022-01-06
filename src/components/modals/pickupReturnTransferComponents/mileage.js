import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import {
  InputField,
  InputFieldSmall,
} from "../../inputfields+dropdowns/inputFields";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function StartingMileage(props) {
  const [startingMileage, setStartingMileage] = useState("");
  return (
    <Overlay title="Starting Mileage">
      <InputField 
        type="number" 
        placeHolder="Starting Mileage in km"
        min={0} value={props.mileage}
        onChange={(e) => props.onChange(e.target.value)}/>
    </Overlay>
  );
}

function ReturnMileage(props) {
  const [aboveMileageLimit, setAboveMileageLimit] = useState(false);
  return (
    <Overlay title="Mileage">
      <InputFieldSmall type="number" placeHolder="km" onChange={(e) => props.onChange(e.target.value)}/>
      <CheckBox
        name="Mileage"
        buttonText="Above Limit"
        checked={aboveMileageLimit}
        onChange={(e) => setAboveMileageLimit(e.target.checked)}
      />
    </Overlay>
  );
}

export { StartingMileage, ReturnMileage };

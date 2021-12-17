import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import {
  InputField,
  InputFieldSmall,
} from "../../inputfields+dropdowns/inputFields";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function StartingFuel(props) {
  const [startingFuelLevel, setStartingFuelLevel] = useState("");
  return (
    <Overlay title="Starting Fuel">
      <InputField
        type="number"
        placeHolder="Starting Fuel Level in %"
        onChange={(e) => setStartingFuelLevel(e.target.value)}
      />
    </Overlay>
  );
}

function ReturnFuel(props) {
  const [belowFuelLimit, setBelowFuelLimit] = useState(false);
  return (
    <Overlay title="Fuel Level">
      <InputFieldSmall type="number" placeHolder="%" />
      <CheckBox
        name="Mileage"
        buttonText="Below Limit"
        checked={belowFuelLimit}
        onChange={(e) => setBelowFuelLimit(e.target.checked)}
      />
    </Overlay>
  );
}

export { StartingFuel, ReturnFuel };

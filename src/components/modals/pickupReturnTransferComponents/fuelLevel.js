import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import {
  InputField,
  InputFieldSmall,
} from "../../inputfields+dropdowns/inputFields";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function StartingFuel(props) {
  return (
    <Overlay title="Starting Fuel">
      <InputField
        type="number"
        placeHolder="Starting Fuel Level in %"
        max={100}
        min={0}
        value={props.fuel}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </Overlay>
  );
}

function ReturnFuel(props) {
  const [belowFuelLimit, setBelowFuelLimit] = useState(false);

  function handleChange(e) {
    props.onChange(e.target.value);
    if (e.target.value < 80) {
      setBelowFuelLimit(true);
    } else {
      setBelowFuelLimit(false);
    }
  }

  return (
    <Overlay title="Fuel Level">
      <div className="rowButtonTight">
        <InputFieldSmall
          type="number"
          placeHolder="%"
          onChange={(e) => handleChange(e)}
        />
        <CheckBox
          name="Mileage"
          buttonText="Below Limit"
          checked={belowFuelLimit}
        />
      </div>
    </Overlay>
  );
}

export { StartingFuel, ReturnFuel };

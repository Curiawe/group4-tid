import { useState } from "react";
import { Overlay } from "../pickupReturnTransferSkeleton";
import { InputFieldSmall } from "../../inputfields+dropdowns/inputFields";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

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

export { ReturnFuel };

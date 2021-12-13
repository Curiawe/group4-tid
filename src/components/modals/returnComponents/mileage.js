import { useState } from "react";
import { Overlay } from "../pickupReturnTransferSkeleton";
import { InputFieldSmall } from "../../inputfields+dropdowns/inputFields";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function ReturnMileage(props) {
  const [aboveMileageLimit, setAboveMileageLimit] = useState(false);
  return (
    <Overlay title="Mileage">
      <InputFieldSmall type="number" placeHolder="km" />
      <CheckBox
        name="Mileage"
        buttonText="Above Limit"
        checked={aboveMileageLimit}
        onChange={(e) => setAboveMileageLimit(e.target.checked)}
      />
    </Overlay>
  );
}

export { ReturnMileage };

import { Overlay } from "../pickupReturnTransferSkeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function StartingFuel(props) {
  return (
    <Overlay title="Starting Fuel">
      <InputField type="number" placeHolder="Starting Fuel Level in %" />
    </Overlay>
  );
}

export { StartingFuel };

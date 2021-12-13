import { Overlay } from "../pickupReturnTransferSkeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function StartingMileage(props) {
  return (
    <Overlay title="Starting Mileage">
      <InputField type="number" placeHolder="Starting Mileage in km" />
    </Overlay>
  );
}

export { StartingMileage };

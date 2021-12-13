import "../modal.css";
import { SelectLocation } from "../../inputfields+dropdowns/dropDowns";
import { Overlay } from "../pickupReturnTransferSkeleton";

function TransferLocation(props) {
  return (
    <Overlay title="Location">
      <SelectLocation
        dropdownTitle="Select Location"
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
    </Overlay>
  );
}

export { TransferLocation };

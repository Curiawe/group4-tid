import { Overlay } from "../pickupReturnTransferSkeleton";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";

function BillCarAs(props) {
  return (
    <Overlay title="Bill Car As">
      <SelectCarGroup />
    </Overlay>
  );
}

export { BillCarAs };

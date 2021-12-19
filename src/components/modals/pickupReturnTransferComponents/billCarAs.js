import { Overlay } from "./pickupReturnTransferSkeleton";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";

function BillCarAs(props) {
  return (
    <Overlay title="Bill Car As">
      <SelectCarGroup onChange={(e) => props.onChangeBillAs(e.target.value)} />
    </Overlay>
  );
}

export { BillCarAs };

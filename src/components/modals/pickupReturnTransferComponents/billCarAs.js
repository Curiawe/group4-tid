import { Overlay } from "./pickupReturnTransferSkeleton";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";

// selected and onChange
function BillCarAs(props) {

  return (
    <Overlay title="Bill Car As">
      <SelectCarGroup onChange={(input) => props.onChange(input)}/>
    </Overlay>
  );
}

export { BillCarAs };

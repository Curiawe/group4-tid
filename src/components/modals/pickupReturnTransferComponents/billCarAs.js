import { Overlay } from "./pickupReturnTransferSkeleton";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";

// selected and onChange
function BillCarAs(props) {
  function debugOnChange(input) {
    console.log("old selected: " + props.selected.name);
    props.onChange(input);
    console.log("new selected: " + props.selected.name);
  }

  return (
    <Overlay title="Bill Car As">
      <SelectCarGroup onChange={(input) => debugOnChange(input)} />
    </Overlay>
  );
}

export { BillCarAs };

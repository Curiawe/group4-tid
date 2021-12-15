import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";
import { Overlay } from "../pickupReturnTransferSkeleton";

function TransferCarGroup(props) {
  return (
    <Overlay title="Car Group">
      <SelectCarGroup
        onChange={(e) => props.onChangeCarGroup(e.target.value)}
      />
    </Overlay>
  );
}

export { TransferCarGroup };

import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { SelectCarState } from "../../inputfields+dropdowns/dropDowns";

function ReturnCarState(props) {
  return (
    <Overlay title="Car State">
      <SelectCarState
        onChange={(e) => props.onChangeReturnCarState(e.target.value)}
      />
    </Overlay>
  );
}

export { ReturnCarState };

import { useState } from "react";
import { Overlay } from "../pickupReturnTransferComponents/pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";

function TransferType() {
  const [transferType, setTransferType] = useState(false);
  return (
    <Overlay title="Transfer Type">
      <TwoRadioButtons
        name="Transfer Type"
        buttonOne="Request Car"
        checkedOne={transferType === "Request Car"}
        buttonTwo="Release Car"
        checkedTwo={transferType === "Release Car"}
        onChange={(e) => {
          setTransferType(e.target.value);
        }}
      />
    </Overlay>
  );
}

export { TransferType };

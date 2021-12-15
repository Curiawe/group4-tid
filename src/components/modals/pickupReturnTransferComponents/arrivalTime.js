import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(false);
  return (
    <Overlay title="Arrival Time">
      <TwoRadioButtons
        name="Arrival Time"
        buttonOne="On Time"
        checkedOne={arrivalTime === "On Time"}
        buttonTwo="Late"
        checkedTwo={arrivalTime === "Late"}
        onChange={(e) => {
          setArrivalTime(e.target.value);
        }}
      />
    </Overlay>
  );
}

export { ReturnTime };

import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  let arrivalCleaned = arrivalTime.toLocaleTimeString("da-DA")
  arrivalCleaned = arrivalCleaned.slice(0,2) + ".00"
  let late = (arrivalTime > props.time)
  console.log("props.time: " + props.time)
  console.log("arrivalTime: " + arrivalTime)

  return (
    <Overlay title="Arrival Time">
      <div style={{lineHeight:"1.8"}}>
      Planned: {props.time.toLocaleTimeString("da-DA").replace("00.00", "00")}<br/>
      Actual: {arrivalCleaned}
      </div>
      <TwoRadioButtons
        name="Arrival Time"
        buttonOne="On Time"
        checkedOne={!late} //this is not fine. 
        buttonTwo="Late"
        checkedTwo={late} // this does not work, but I need to be able to note the time, anyway
      />
    </Overlay>
  );
}

export { ReturnTime };

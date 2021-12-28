import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";
import { InputFieldSmall } from "../../inputfields+dropdowns/inputFields";
import dataSetBusinessHours from "../../../data/businessHours";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  const permittedTimes = dataSetBusinessHours("Return")
  const arrivalCleaned = arrivalTime.toLocaleTimeString("da-DA") // this part doesn't work
  let late = (arrivalTime > props.time)
  console.log("props.time: " + props.time)
  console.log("arrivalTime: " + arrivalCleaned)

  return (
    <Overlay title="Arrival Time">
      <div style={{lineHeight:"1.8"}}>
      Planned: {props.time.toLocaleTimeString("da-DA").replace("00.00", "00")}<br/>
      Actual:  <InputFieldSmall type="time" onChange={(input) => setArrivalTime(input)} name ="Actual" list={permittedTimes}/>
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

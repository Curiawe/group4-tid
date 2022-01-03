import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";
import { InputFieldSmall } from "../../inputfields+dropdowns/inputFields";
import dataSetBusinessHours from "../../../data/businessHours";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  const permittedTimes = dataSetBusinessHours("Return")
  let late = (arrivalTime < props.time)
  console.log("props.time: " + props.time)

  return (
    <Overlay title="Returned">
      <div style={{lineHeight:"1.8"}}>
      Planned: {props.time.toLocaleTimeString("en-US").substring(0,5)}<br/>
      Actual:  <InputFieldSmall type="time" value={arrivalTime} onChange={(input) => setArrivalTime(input)} name ="Actual" list={permittedTimes}/>
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

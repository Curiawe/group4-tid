import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";
import { SelectTime } from "../../inputfields+dropdowns/dropDowns";
import dataSetBusinessHours from "../../../data/businessHours";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  let late = (arrivalTime > props.time)
  console.log("props.time: " + props.time)

  function handleChange(input) {
    props.setReturned(input)
    setArrivalTime(input)
  }

  return (
    <Overlay title="Returned">
      <div style={{lineHeight:"1.8"}}>
      Planned: {props.time}<br/>
      Actual:
      <SelectTime
        onChange={(e) => handleChange(e.target.value)}
        className="small"
        defaultValue="Select Time"
      />
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

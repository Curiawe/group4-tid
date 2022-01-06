import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";
import { SelectTime } from "../../inputfields+dropdowns/dropDowns";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  let late = (arrivalTime > props.time)

  function handleChange(e) {
    props.setReturned(e.target.value)
    setArrivalTime(e.target.value)
  }

  return (
    <Overlay title="Returned">
      <div style={{lineHeight:"1.8"}}>
      Planned: {props.time}<br/>
      Arrived before:
      <SelectTime
        onChange={(e) => handleChange(e)}
        className="small"
        defaultValue="Select Time"
      />
      </div>
      <TwoRadioButtons
        name="Arrival Time"
        buttonOne="On Time"
        checkedOne={!late} 
        buttonTwo="Late"
        checkedTwo={late}
      />
    </Overlay>
  );
}

export { ReturnTime };

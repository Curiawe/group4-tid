import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import { TwoRadioButtons } from "../../selectionBoxes/selectionBoxes";
import { SelectTime } from "../../inputfields+dropdowns/dropDowns";

function ReturnTime(props) {
  const [arrivalTime, setArrivalTime] = useState(props.returned);

  let late = arrivalTime > props.time;

  function handleChange(e) {
    props.setReturned(e.target.value);
    setArrivalTime(e.target.value);
  }

  return (
    <>
      <Overlay title="Scheduled">
        <div className="rowButton">
          <select
            defaultValue={props.time}
            className="small"
            disabled
            style={{ cursor: "not-allowed" }}
          >
            <option value="Scheduled return time" disabled>
              {props.time}
            </option>
          </select>
        </div>
      </Overlay>
      <Overlay title="Returned">
        <div className="rowButtonTight">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SelectTime
              onChange={(e) => handleChange(e)}
              className="small"
              value={props.returned}
            />
            <TwoRadioButtons
              name="Arrival Time"
              buttonOne="On Time"
              checkedOne={!late}
              buttonTwo="Late"
              checkedTwo={late}
            />
          </div>
        </div>
      </Overlay>
    </>
  );
}

export { ReturnTime };

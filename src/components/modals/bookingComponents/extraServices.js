import "../modal.css";
import { BookingComponent } from "./skeleton";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";
import { InputFieldSmall } from "../../inputfields+dropdowns/inputFields";

function ExtraServices(props) {
  let extraMileageString = propsContained(props.extraMileage);

  function propsContained(input) {
    if (input) {
      return input;
    } else {
      return;
    }
  }

  return (
    <BookingComponent title="Extra Services">
      <CheckBox
        className="checkBox"
        type="checkbox"
        checked={props.extraDriver}
        onChange={(e) => props.onChangeExtraDriver(e.target.checked)}
        buttonText="Extra Driver"
      />
      <div className="rowButton">
        <div>Extra Mileage</div>
        <div>
          <InputFieldSmall
            className="inputFieldSmall"
            type="number"
            placeHolder="km"
            onChange={(e) => props.onChangeExtraMileage(e.target.value)}
            value={extraMileageString}
          />
        </div>
      </div>
    </BookingComponent>
  );
}

export { ExtraServices };

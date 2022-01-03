import "../modal.css";
import { BookingComponent } from "./skeleton";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function ExtraServices(props) {
  return (
    <BookingComponent title="Extra Services">
      <div>
        <CheckBox
          className="checkBox"
          type="checkbox"
          checked={props.extraDriver}
          onChange={(e) => props.onChangeExtraDriver(e.target.checked)}
          buttonText="Extra Driver"
        />
        <CheckBox
          name="Mileage"
          buttonText="Extra Mileage"
          checked={props.extraMileage}
          onChange={(e) => props.onChangeExtraMileage(e.target.checked)}
        />
      </div>
    </BookingComponent>
  );
}

export { ExtraServices };

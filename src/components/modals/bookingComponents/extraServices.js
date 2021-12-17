import "../modal.css";
import { BookingComponent } from "./skeleton";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";

function ExtraServices(props) {
  return (
    <BookingComponent title="Extra Services">
      <CheckBox
        className="checkBox"
        type="checkbox"
        checked={props.extraDriver}
        onChange={(e) => props.onChangeExtraDriver(e.target.checked)}
        buttonText="Extra Driver"
      />
    </BookingComponent>
  );
}

export { ExtraServices };

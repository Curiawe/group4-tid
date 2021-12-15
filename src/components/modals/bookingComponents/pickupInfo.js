import "../modal.css";
import { BookingComponent } from "./skeleton";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";
import { SelectLocation } from "../../inputfields+dropdowns/dropDowns";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingPickup(props) {
  return (
    <BookingComponent title="Pickup">
      <CheckBox
        className="checkBox"
        type="checkbox"
        checked={props.walkin}
        onChange={(e) => props.onChangeWalkin(e.target.checked)}
        buttonText="Walk-in"
      />
      <SelectLocation
        dropdownTitle="Select Pickup Location"
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(e.target.value)}
        placeHolder="Pickup Date"
      />
      <InputField
        className="inputField"
        type="time"
        min="8"
        max="10"
        onChange={(e) => props.onChangeTime(e.target.value)}
        placeHolder="Pickup Time"
      />
    </BookingComponent>
  );
}

export { BookingPickup };

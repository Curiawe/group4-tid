import "../modal.css";
import { BookingComponent } from "./skeleton";
import { CheckBox } from "../../selectionBoxes/selectionBoxes";
import { SelectLocation } from "../../inputfields+dropdowns/dropDowns";
import { InputField } from "../../inputfields+dropdowns/inputFields";
import { SelectTime } from "../../inputfields+dropdowns/dropDowns";

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
        defaultValue="Select Pickup Location"
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(e.target.value)}
        placeHolder="Pickup Date"
      />
      <SelectTime
        onChange={(e) => props.onChangeTime(e.target.value)}
        defaultValue="Select Time"
      />
    </BookingComponent>
  );
}

function EditBookingPickup(props) {
  let locationString = props.location;
  let pickupDateString = props.date.toLocaleDateString("fr-CA");
  let pickupTimeString = props.time;

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
        value={locationString}
        defaultValue={locationString}
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(new Date(e.target.value))}
        placeHolder="Pickup Date"
        value={pickupDateString}
      />
      <SelectTime
        onChange={(e) => props.onChangeTime(e.target.value)}
        defaultValue={pickupTimeString}
        value={pickupTimeString}
      />
    </BookingComponent>
  );
}

export { BookingPickup, EditBookingPickup };

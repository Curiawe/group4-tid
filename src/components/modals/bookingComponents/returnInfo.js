import "../modal.css";
import { BookingComponent } from "./skeleton";
import { SelectLocation } from "../../inputfields+dropdowns/dropDowns";
import { InputField } from "../../inputfields+dropdowns/inputFields";
import { SelectTime } from "../../inputfields+dropdowns/dropDowns";

function BookingReturn(props) {
  return (
    <BookingComponent title="Return">
      <SelectLocation
        dropdownTitle="Select Return Location"
        defaultValue="Select Return Location"
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(e.target.value)}
        placeHolder="Select Date"
      />
      <SelectTime
        onChange={(e) => props.onChangeTime(e.target.value)}
        defaultValue="Select Time"
      />
    </BookingComponent>
  );
}

function EditBookingReturn(props) {
  let locationString = props.location;
  let returnDateString = props.date.toLocaleDateString("fr-CA");
  let returnTimeString = props.time;

  return (
    <BookingComponent title="Return">
      <SelectLocation
        dropdownTitle="Select Return Location"
        defaultValue={locationString}
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(new Date(e.target.value))}
        placeHolder="Select Date"
        value={returnDateString}
      />
      <SelectTime
        onChange={(e) => props.onChangeTime(e.target.value)}
        defaultValue={returnTimeString}
        value={returnTimeString}
      />
    </BookingComponent>
  );
}

export { BookingReturn, EditBookingReturn };

import "../modal.css";
import { BookingComponent } from "./skeleton";
import { SelectLocation } from "../../inputfields+dropdowns/dropDowns";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function BookingReturn(props) {
  return (
    <BookingComponent title="Return">
      <SelectLocation
        dropdownTitle="Select Pickup Location"
        onChange={(e) => props.onChangeLocation(e.target.value)}
      />
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(e.target.value)}
        placeHolder="Select Date"
      />
      <InputField
        className="inputField"
        type="time"
        onChange={(e) => props.onChangeTime(e.target.value)}
        placeHolder="Select Time"
      />
    </BookingComponent>
  );
}

export { BookingReturn };
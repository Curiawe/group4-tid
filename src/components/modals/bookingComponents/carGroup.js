import "../modal.css";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";
import { BookingComponent } from "./skeleton";

function BookingCarGroup(props) {
  return (
    <BookingComponent title="Car Group">
      <SelectCarGroup
        onChange={(input) => props.onChangeCarGroup(input)}
        defaultValue="Select Car Group"
      />
    </BookingComponent>
  );
}

function EditBookingCarGroup(props) {
  let carGroup = propsContained(props.carGroup);

  function propsContained(input) {
    if (input) {
      return input;
    } else {
      return "";
    }
  }

  return (
    <BookingComponent title="Car Group">
      <SelectCarGroup
        onChange={(input) => props.onChangeCarGroup(input)}
        defaultValue={carGroup}
      />
    </BookingComponent>
  );
}
export { BookingCarGroup, EditBookingCarGroup };

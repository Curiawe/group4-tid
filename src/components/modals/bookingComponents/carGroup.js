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
  return (
    <BookingComponent title="Car Group">
      <SelectCarGroup
        onChange={(e) => props.onChangeCarGroup(e.target.value)}
        defaultValue={props.carGroup.name}
      />
    </BookingComponent>
  );
}
export { BookingCarGroup, EditBookingCarGroup };

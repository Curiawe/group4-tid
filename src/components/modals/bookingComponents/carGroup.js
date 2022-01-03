import "../modal.css";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";
import { BookingComponent } from "./skeleton";

function BookingCarGroup(props) {
  return (
    <BookingComponent title="Car Group">
      <SelectCarGroup
        onChange={(input) => props.onChangeCarGroup(input)}
      />
    </BookingComponent>
  );
}

export { BookingCarGroup };

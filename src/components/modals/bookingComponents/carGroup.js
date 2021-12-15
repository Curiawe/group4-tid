import "../modal.css";
import { SelectCarGroup } from "../../inputfields+dropdowns/dropDowns";
import { BookingComponent } from "./skeleton";

function BookingCarGroup(props) {
  return (
    <BookingComponent title="Car Group">
      <SelectCarGroup
        onChange={(e) => props.onChangeCarGroup(e.target.value)}
      />
    </BookingComponent>
  );
}

export { BookingCarGroup };

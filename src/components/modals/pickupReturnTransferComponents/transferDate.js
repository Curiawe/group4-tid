import { Overlay } from "../pickupReturnTransferSkeleton";
import { InputField } from "../../inputfields+dropdowns/inputFields";

function TransferDate(props) {
  return (
    <Overlay title="Date">
      <InputField
        className="inputField"
        type="date"
        onChange={(e) => props.onChangeDate(e.target.value)}
        placeHolder="Transfer Date"
      />
    </Overlay>
  );
}

export { TransferDate };

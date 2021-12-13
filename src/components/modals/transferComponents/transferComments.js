import { Overlay } from "../pickupReturnTransferSkeleton";
import { TextArea } from "../../inputfields+dropdowns/inputFields";

function TransferComments(props) {
  return (
    <Overlay title="Comments">
      <TextArea placeHolder="Comments regarding the transfer" />
    </Overlay>
  );
}

export { TransferComments };

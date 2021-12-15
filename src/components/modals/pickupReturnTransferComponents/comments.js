import { Overlay } from "./pickupReturnTransferSkeleton";
import { TextArea } from "../../inputfields+dropdowns/inputFields";

function Comments(props) {
  return (
    <Overlay title="Comments">
      <TextArea placeHolder="Comments about the car's state" />
    </Overlay>
  );
}

function TransferComments(props) {
  return (
    <Overlay title="Comments">
      <TextArea placeHolder="Comments regarding the transfer" />
    </Overlay>
  );
}

export { Comments, TransferComments };

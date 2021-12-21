import { Overlay } from "./pickupReturnTransferSkeleton";
import { TextArea } from "../../inputfields+dropdowns/inputFields";

function Comments(props) {
  return (
    <Overlay title="Comments">
      <TextArea placeHolder="Comments about the car's state" value={props.comment} onChange={(e) => props.onChange(e.target.value)}/>
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

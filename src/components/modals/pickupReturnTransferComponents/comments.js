import { Overlay } from "./pickupReturnTransferSkeleton";
import { TextArea } from "../../inputfields+dropdowns/inputFields";

function Comments(props) {
  return (
    <Overlay title="Comments">
      <TextArea
        placeHolder="Comments about the car's state"
        onChange={(e) => props.onChangeComments(e.target.value)}
      />
    </Overlay>
  );
}

function TransferComments(props) {
  return (
    <Overlay title="Comments">
      <TextArea
        placeHolder="Comments regarding the transfer"
        onChange={(e) => props.onChangeTransferComments(e.target.value)}
      />
    </Overlay>
  );
}

export { Comments, TransferComments };

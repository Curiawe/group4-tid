import { Overlay } from "../pickupReturnTransferSkeleton";
import { TextArea } from "../../inputfields+dropdowns/inputFields";

function ReturnComments(props) {
  return (
    <Overlay title="Comments">
      <TextArea placeHolder="Comments about the car's state" />
    </Overlay>
  );
}

export { ReturnComments };

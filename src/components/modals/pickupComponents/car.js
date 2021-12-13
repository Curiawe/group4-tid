import { Overlay } from "../pickupReturnTransferSkeleton";
import FeatherIcon from "feather-icons-react";

function SelectedCar(props) {
  return (
    <Overlay title="Car">
      <FeatherIcon icon="edit" className="icon" />
    </Overlay>
  );
}

export { SelectedCar };

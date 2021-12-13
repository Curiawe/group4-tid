import { Overlay } from "../pickupReturnTransferSkeleton";
import FeatherIcon from "feather-icons-react";

function SelectedCar(props) {
  return (
    <Overlay title="Car">
      here's the car
      <FeatherIcon icon="edit" className="icon" />
    </Overlay>
  );
}

export { SelectedCar };

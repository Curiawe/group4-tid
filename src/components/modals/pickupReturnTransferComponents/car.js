import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import FeatherIcon from "feather-icons-react";
import { SelectCar } from "../selectCarModal";

function SelectedCar(props) {
  const [showSelectCarModal, setShowSelectCarModal] = useState(false);
  return (
    <Overlay title="Car">
      Select a car, please
      <div
        className="clickableIcon"
        onClick={() => setShowSelectCarModal(true)}
      >
        <FeatherIcon icon="edit" className="icon" />
      </div>
      <SelectCar
        showSelectCarModal={showSelectCarModal}
        onClose={() => setShowSelectCarModal(false)}
        onConfirm={() => setShowSelectCarModal(false)}
      ></SelectCar>
    </Overlay>
  );
}

function TransferCar(props) {
  return <Overlay title="Car">here's the car</Overlay>;
}

export { SelectedCar, TransferCar };

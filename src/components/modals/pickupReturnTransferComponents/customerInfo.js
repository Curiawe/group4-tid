import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import CustomerInfoModal from "../customerInfoModal";
import FeatherIcon from "feather-icons-react";

function CustomerInfo(props) {
  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  return (
    <Overlay title="Customer Info">
      here's some info
      <div
        className="clickableIcon"
        onClick={() => setShowCustomerInfoModal(true)}
      >
        <FeatherIcon icon="edit" className="icon" />
      </div>
      <CustomerInfoModal
        showCustomerInfoModal={showCustomerInfoModal}
        onClose={() => setShowCustomerInfoModal(false)}
        onConfirm={() => setShowCustomerInfoModal(false)}
      ></CustomerInfoModal>
    </Overlay>
  );
}

export { CustomerInfo };

import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import CustomerInfoModal from "../customerInfoModal";
import { ButtonNoLink, ButtonOnChange } from "../../buttons/ColorButton";
import FetchFunctions from "../../FetchFunctions";

function CustomerInfo(props) {
  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  let customer = FetchFunctions.fetchCustomerFromBookingRef(props.booking)
  return (
    <Overlay title="Customer Info">
      {customer.name}
        <ButtonNoLink className="buttonSmall" title="Check Info" primary="true" color="PurpleBtn" onClick={() => setShowCustomerInfoModal(true)}/>
      <CustomerInfoModal
        showCustomerInfoModal={showCustomerInfoModal}
        onClose={() => setShowCustomerInfoModal(false)}
        onConfirm={() => setShowCustomerInfoModal(false)}
      ></CustomerInfoModal>
    </Overlay>
  );
}

export { CustomerInfo };

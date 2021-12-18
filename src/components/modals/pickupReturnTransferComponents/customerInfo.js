import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import CustomerInfoModal from "../customerInfoModal";
import { ButtonNoLink } from "../../buttons/ColorButton";
import FetchFunctions from "../../DB-functions/FetchFunctions"; 

function CustomerInfo(props) {
  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  let customer = FetchFunctions.fetchCustomerFromBookingRef(props.booking)
  return (
    <Overlay title="Customer Info">
      {customer.name}
        <ButtonNoLink className="buttonSmall" title="Check Info" primary="true" color="PurpleBtn" onClick={() => setShowCustomerInfoModal(true)}/>
      <CustomerInfoModal
        booking={props.booking}
        showCustomerInfoModal={showCustomerInfoModal}
        onClose={() => setShowCustomerInfoModal(false)}
        onConfirm={() => setShowCustomerInfoModal(false)}
      ></CustomerInfoModal >
    </Overlay>
  );
}

export { CustomerInfo };

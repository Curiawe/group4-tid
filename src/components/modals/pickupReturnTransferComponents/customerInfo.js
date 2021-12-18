import { useState } from "react";
import { Overlay } from "./pickupReturnTransferSkeleton";
import CustomerInfoModal from "../customerInfoModal";
import { ButtonNoLink } from "../../buttons/ColorButton";
import FetchFunctions from "../../DB-functions/FetchFunctions"; 

function CustomerInfo(props) {

  const [confirmBtnColor, setColor] = useState("PurpleBtn");
  const [confirmText, setText] = useState("Check Info")

  function confirm() {
    setShowCustomerInfoModal(false)
    setColor("GreenBtn")
    setText("Confirmed")
  }

  const [showCustomerInfoModal, setShowCustomerInfoModal] = useState(false);
  let customer = FetchFunctions.fetchCustomerFromBookingRef(props.booking)
  return (
    <Overlay title="Customer Info">
      {customer.name}
        <ButtonNoLink className="buttonSmall" title={confirmText} primary="true" color={confirmBtnColor} onClick={() => setShowCustomerInfoModal(true)}/>
      <CustomerInfoModal
        booking={props.booking}
        showCustomerInfoModal={showCustomerInfoModal}
        onClose={() => setShowCustomerInfoModal(false)}
        onConfirm={() => confirm()}
      ></CustomerInfoModal >
    </Overlay>
  );
}

export { CustomerInfo };

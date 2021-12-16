import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import updateEntries from "../DB-functions/UpdateEntries";

function CustomerInfoModal(props) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [licenseID, setLicenseID] = useState();
  const [licenseIssueDate, setIssueDate] = useState();
  const [licenseExpirationDate, setExpirationDate] = useState();

  function updateCustomer(){
    updateEntries.updateCustomer(props.booking, name, address, phone, email, birthday, licenseID, licenseIssueDate, licenseExpirationDate ) 
    console.log("Updated Customer " + name + ", Closing Overlay now")
    props.onConfirm()
  }


  if (!props.showCustomerInfoModal) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="customerInfoContent">
        <div className="overlayTitle">
          <h3>Edit Customer</h3>
          <p>CustomerID</p>
        </div>

        <div className="overlayBody">
          <BookingCustomerInfo
            name={name}
            address={address}
            phone={phone}
            email={email}
            birthday={birthday}
            licenseID={licenseID}
            licenseIssueDate={licenseIssueDate}
            licenseExpirationDate={licenseExpirationDate}
            onChangeName={(newName) => {
              setName(newName);
            }}
            onChangeAddress={(newAddress) => {
              setAddress(newAddress);
            }}
            onChangePhone={(newPhone) => {
              setPhone(newPhone);
            }}
            onChangeEmail={(newEmail) => {
              setEmail(newEmail);
            }}
            onChangeBirthday={(newBirthday) => {
              setBirthday(newBirthday);
            }}
            onChangeLicenseID={(newLicenseID) => {
              setLicenseID(newLicenseID);
            }}
            onChangeIssueDate={(newIssueDate) => {
              setIssueDate(newIssueDate);
            }}
            onChangeExpirationDate={(newExpirationDate) => {
              setExpirationDate(newExpirationDate);
            }}
          />
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Cancel"
            onClick={props.onClose}
          />
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Save Customer"
            onClick={() => updateCustomer()}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfoModal;

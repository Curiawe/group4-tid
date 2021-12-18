import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import updateEntries from "../DB-functions/UpdateEntries";
import FetchFunctions from "../DB-functions/FetchFunctions";

function CustomerInfoModal(props) {
  const customer = FetchFunctions.fetchBookingFromRef(props.booking).Customer

  const [name, setName] = useState(customer.name);
  const [address, setAddress] = useState(customer.address);
  const [phone, setPhone] = useState(customer.phone);
  const [email, setEmail] = useState(customer.email);
  const [birthday, setBirthday] = useState(customer.born);
  const [licenseID, setLicenseID] = useState(customer.license.id);
  const [licenseIssueDate, setIssueDate] = useState(customer.license.issued);
  const [licenseExpirationDate, setExpirationDate] = useState(customer.license.expires);



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

import "./modal.css";
import "../tables/tables.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import updateEntries from "../DB-functions/UpdateEntries";
import FetchFunctions from "../DB-functions/FetchFunctions";

function CustomerInfoModal(props) {
  const customer = FetchFunctions.fetchCustomerFromBookingRef(props.booking);

  const [editData, setEditData] = useState(false);

  const [name, setName] = useState(customer.name);
  const [address, setAddress] = useState(customer.address);
  const [phone, setPhone] = useState(customer.phone);
  const [email, setEmail] = useState(customer.email);
  const [birthday, setBirthday] = useState(customer.born);
  const [licenseID, setLicenseID] = useState(customer.license.id);
  const [licenseIssueDate, setIssueDate] = useState(customer.license.issued);
  const [licenseExpirationDate, setExpirationDate] = useState(
    new Date(customer.license.expires)
  );

  let buttonFunct = () => {
    confirmUpdate();
  };
  let buttonText = "Confirm Information";

  function displayCustomer() {
    return (
      <div className="overlayBody">
        <table style={{ width: "364px" }}>
          <tbody>
            <tr>
              <td>
                <b>Customer Name:</b>
              </td>
              <td>{customer.name}</td>
            </tr>

            <tr>
              <td>
                <b>Address:</b>
              </td>
              <td>{address}</td>
            </tr>

            <tr>
              <td>
                <b>Phone:</b>
              </td>
              <td>{customer.phone}</td>
            </tr>

            <tr>
              <td>
                <b>Email:</b>
              </td>
              <td>{customer.email}</td>
            </tr>

            <tr>
              <td>
                <b>Birthday:</b>
              </td>
              <td>{new Date(customer.born).toLocaleDateString("da-DA")}</td>
            </tr>

            <tr>
              <td>
                <b>License ID:</b>
              </td>
              <td>{customer.license.id}</td>
            </tr>

            <tr>
              <td>
                <b>License Issued:</b>
              </td>
              <td>
                {new Date(customer.license.issued).toLocaleDateString("da-DA")}
              </td>
            </tr>

            <tr>
              <td>
                <b>License Expires:</b>
              </td>
              <td>
                {new Date(customer.license.expires).toLocaleDateString("da-DA")}
              </td>
            </tr>

            <tr>
              <td>
                <b>License Valid:</b>
              </td>
              <td>{customer.license.valid.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function onCloseModalReset() {
    setEditData(false);
    props.onClose();
  }

  function editCustomer() {
    return (
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
            setBirthday(new Date(newBirthday));
          }}
          onChangeLicenseID={(newLicenseID) => {
            setLicenseID(newLicenseID);
          }}
          onChangeIssueDate={(newIssueDate) => {
            setIssueDate(new Date(newIssueDate));
          }}
          onChangeExpirationDate={(newExpirationDate) => {
            setExpirationDate(new Date(newExpirationDate));
          }}
        />
      </div>
    );
  }

  function editButton() {
    if (editData) {
      return null;
    } else {
      return (
        <div className="editButtons">
          <ButtonNoLink // toggle edit customer info
            color="DarkBlueBtn"
            primary="true"
            className="buttonSmall"
            title="Edit Customer Info"
            onClick={() => changeStatus()}
          />

          <ButtonNoLink // cancel booking -> Customer info is invalid
            color="DarkRedBtn"
            primary="true"
            className="buttonSmall"
            title="Customer Unfit"
            onClick={() =>
              alert(
                "You clicked 'Customer Unfit'.\n\nThis means the customer showed no valid driver's license, or was otherwise unfit to drive.\n\nIn the future, you can select between cancelling the booking for the customer and changing the Customer.\n\nFor now, either edit the customer information or cancel the booking by selecting the booking, clicking the Edit button and selecting 'Cancel Booking'."
              )
            }
          />
        </div>
      );
    }
  }

  function updateCustomer() {
    const missing = [];

    if (!name) {
      missing.push("Name");
    }
    if (!address) {
      missing.push("Address");
    }
    if (!phone) {
      missing.push("Phone");
    }
    if (!licenseID) {
      missing.push("License ID");
    }

    if (missing.length > 0) {
      let alertString = "Sorry, you can't save, yet. You are missing: ";
      for (let i = 0; i < missing.length; i++) {
        alertString += missing[i] + ", ";
      }
      alertString += " so please fill that out.";
      alert(alertString);
    } else {
      updateEntries.updateCustomer(
        props.booking,
        name,
        address,
        phone,
        email,
        birthday,
        licenseID,
        licenseIssueDate,
        licenseExpirationDate
      );
      setEditData(!editData);
    }
  }

  function confirmUpdate() {
    props.onConfirm();
  }

  function customerContent() {
    if (editData) {
      buttonText = "Save Changes";
      buttonFunct = () => updateCustomer();
      return editCustomer();
    }
    if (!editData) {
      buttonText = "Confirm Information";
      buttonFunct = () => confirmUpdate();
      return displayCustomer();
    }
  }

  function changeStatus() {
    setEditData(!editData);
  }

  if (!props.showCustomerInfoModal) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="customerInfoContent">
        <div className="overlayTitle">
          <h3>Review Customer</h3>
          <p>CustomerID: {licenseID}</p>
          {editButton()}
        </div>
        {customerContent()}
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonMedium"
            title="Close"
            onClick={() => onCloseModalReset()}
          />
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title={buttonText}
            onClick={() => buttonFunct()}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfoModal;

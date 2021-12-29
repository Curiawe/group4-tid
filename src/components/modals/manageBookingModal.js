import { React, useState } from "react";
import { ButtonNoLink, ButtonOnChange } from "../buttons/ColorButton";
import FetchFunctions from "../DB-functions/FetchFunctions";
import updateEntries from "../DB-functions/UpdateEntries";
import { BookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { ExtraServices } from "./bookingComponents/extraServices";
import { BookingPickup } from "./bookingComponents/pickupInfo";
import { Price } from "./bookingComponents/price";
import { BookingReturn } from "./bookingComponents/returnInfo";
import "./modal.css";
import FeatherIcon from "feather-icons-react";

function ManageBookingModal(props) {
  let booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);

  const [editData, setEditData] = useState(false);

  let buttonFunct = () => {
    confirmUpdate();
  };

  let buttonText = "";
  let services;
  let serviceComp;

  if (!props.showManageBookingModal) {
    return null;
  } else if (props.showManageBookingModal && !props.selectedBooking) {
    return (
      <div className="overlay">
        <div className="popupBlue">
          <div className="overlayTitle">
            <FeatherIcon icon="alert-triangle" />
          </div>
          <div className="popupBody">
            Please select a booking before editing.
          </div>
          <div className="buttonCenter">
            <ButtonOnChange
              color="DarkBlueBtn"
              primary="true"
              className="buttonLarge"
              title="Go back"
              onClick={props.onClose}
            />
          </div>
        </div>
      </div>
    );
  }

  if (booking.Services.driver) {
    services = "1 Extra Driver";
  } else if (booking.Services.mileage) {
    services = "Extra Mileage: " + booking.Services.mileage;
  }

  if (services) {
    serviceComp = <>{services}</>;
  } else {
    serviceComp = <>No extra services selected.</>;
  }

  /*
  function updateBooking() {
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
    console.log("Updated Customer " + name + ", Closing Overlay now");
    setEditData(!editData);
  } */

  function confirmUpdate() {
    props.onConfirm();
  }

  function onCloseModalReset() {
    setEditData(false);
    props.onClose();
  }

  function bookingContent() {
    if (editData) {
      buttonText = "Save Changes";
      buttonFunct = () => confirmUpdate();
      return editBooking();
    }
    if (!editData) {
      buttonText = "Confirm Information";
      buttonFunct = () => confirmUpdate();
      return displayBooking();
    }
  }

  function changeStatus() {
    setEditData(!editData);
    console.log("State Changed: " + editData);
  }

  function displayBooking() {
    return (
      <div className="reviewContent">
        <div className="overlayTitle">
          <h3>Manage Booking</h3>
          <p>Booking ID: {booking.Ref}</p>
          <buttonbox style={{ display: "flex", flexDirection: "row" }}>
            <ButtonNoLink // edit booking info
              color="DarkBlueBtn"
              primary="true"
              className="buttonSmall"
              title="Edit Booking"
              onClick={() => changeStatus()}
            />
            <ButtonNoLink // delete booking
              color="DarkRedBtn"
              primary="true"
              className="buttonSmall"
              title="Delete Booking"
              onClick={() => alert("Booking deleted!")}
            />
          </buttonbox>
        </div>
        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="firstColumn">
                <h5>Pickup</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Location:</b>
                      </td>
                      <td>{booking.Pickup.location.Location}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Time:</b>
                      </td>
                      <td>
                        {new Date(booking.Pickup.time).toLocaleDateString(
                          "da-DA"
                        )}
                        ,{" "}
                        {new Date(booking.Pickup.time)
                          .toLocaleTimeString("da-DA")
                          .replace("00.00", "00")}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h5>Return</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Location:</b>
                      </td>
                      <td>{booking.Return.location.Location}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Time:</b>
                      </td>
                      <td>
                        {new Date(booking.Return.time).toLocaleDateString(
                          "da-DA"
                        )}
                        ,{" "}
                        {new Date(booking.Return.time)
                          .toLocaleTimeString("da-DA")
                          .replace("00.00", "00")}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h5>Car Group</h5>
                {booking.carGroup.name}
                <h5>Extra Services</h5>
                {serviceComp}
              </div>
            </div>
            <div className="column">
              <div className="secondColumn">
                <h5>Customer Info</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Name:</b>
                      </td>
                      <td>{booking.Customer.name}</td>
                    </tr>

                    <tr>
                      <td>
                        <b>Address:</b>
                      </td>
                      <td>{booking.Customer.address}</td>
                    </tr>

                    <tr>
                      <td>
                        <b>Phone:</b>
                      </td>
                      <td>{booking.Customer.phone}</td>
                    </tr>

                    <tr>
                      <td>
                        <b>Email:</b>
                      </td>
                      <td>{booking.Customer.email}</td>
                    </tr>

                    <tr>
                      <td>
                        <b>Birthday:</b>
                      </td>
                      <td>
                        {new Date(booking.Customer.born).toLocaleDateString(
                          "da-DA"
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <b>License ID:</b>
                      </td>
                      <td>{booking.Customer.license.id}</td>
                    </tr>

                    <tr>
                      <td>
                        <b>License Issued:</b>
                      </td>
                      <td>
                        {new Date(
                          booking.Customer.license.issued
                        ).toLocaleDateString("da-DA")}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <b>License Expires:</b>
                      </td>
                      <td>
                        {new Date(
                          booking.Customer.license.expires
                        ).toLocaleDateString("da-DA")}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <b>License Valid:</b>
                      </td>
                      <td>{booking.Customer.license.valid.toString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="overlayFooterOneBtn">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Close"
            onClick={props.onClose}
          />
        </div>
      </div>
    );
  }

  function editBooking() {
    return (
      <div className="reviewContent">
        <div className="overlayTitle">
          <h3>Manage Booking</h3>
          <p>Booking ID: {booking.Ref}</p>
        </div>
        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="firstColumn">
                <BookingPickup />
                <BookingReturn />
                <BookingCarGroup />
                <ExtraServices />
              </div>
            </div>
            <div className="column">
              <div className="secondColumn">
                <BookingCustomerInfo />
                <Price />
              </div>
            </div>
          </div>
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonMedium"
            title="Cancel"
            onClick={() => onCloseModalReset()}
          />
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Save Changes"
            onClick={props.onConfirm}
          />
        </div>
      </div>
    );
  }

  return <div className="overlay">{bookingContent()}</div>;
}

export default ManageBookingModal;

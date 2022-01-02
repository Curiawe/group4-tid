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
import EditBookingModal from "./editBookingModal";

function ManageBookingModal(props) {
  let booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);

  const [editData, setEditData] = useState(false);
  const [showEditBookingModal, setShowEditBookingModal] = useState(false);

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
            Please select the booking you want to edit.
          </div>
          <div className="buttonCenter">
            <ButtonOnChange
              color="LightBlueBtn"
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

  let buttonFunct = () => {
    confirmUpdate();
  };

  let buttonText = "";
  let services;
  let serviceComp;

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
      return <EditBookingModal booking={props.booking} />;
    }
    if (!editData) {
      buttonText = "Confirm Information";
      buttonFunct = () => confirmUpdate();
      return displayBooking();
    }
  }

  function changeStatus() {
    setEditData(!editData);
    /*console.log("State Changed: " + editData);*/
  }

  function setBookingInfo(booking) {
    props.onSave(booking);
  }

  function onCloseResetBooking() {
    props.onSave(null);
    setShowEditBookingModal(false);
  }

  function handleConfirm() {
    /*console.log("Handling Click");
    console.log(props.selected);*/
    setShowEditBookingModal(false);
  }

  function displayBooking() {
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
    return (
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>Manage Booking</h3>
          Booking ID: {booking.Ref}
          <buttonbox
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "4px",
            }}
          >
            <ButtonNoLink // edit booking info
              color="DarkBlueBtn"
              primary="true"
              className="buttonSmall"
              title="Edit Booking"
              onClick={() => setShowEditBookingModal(true)}
            />
            <EditBookingModal
              selectedBooking={props.selectedBooking}
              showEditBookingModal={showEditBookingModal}
              onClose={() => setShowEditBookingModal(false)}
              onConfirm={() => handleConfirm()}
              onSave={(input) => setBookingInfo(input)}
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
            className="buttonMedium"
            title="Close"
            onClick={props.onClose}
          />
        </div>
      </div>
    );
  }

  return <div className="overlay">{bookingContent()}</div>;
}

export default ManageBookingModal;

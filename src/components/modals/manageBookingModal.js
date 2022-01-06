import { React, useState } from "react";
import { ButtonNoLink, ButtonOnChange } from "../buttons/ColorButton";
import FetchFunctions from "../DB-functions/FetchFunctions";
import "./modal.css";
import FeatherIcon from "feather-icons-react";
import EditBookingModal from "./editBookingModal";
import { getNumber } from "../priceCalc";

function ManageBookingModal(props) {
  let booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);

  const [showEditBookingModal, setShowEditBookingModal] = useState(false);

  // only displaying the modal if a booking is selected and button is clicked
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

  // handling the edit modal
  function handleConfirm() {
    booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);
    setShowEditBookingModal(false);
  }

  // handling walkins
  let walkinComp;
  if (booking.isWalkin === true) {
    walkinComp = "This is Walk-in Booking";
  }

  // handling extra services
  let services;
  if (booking.Services.driver && !booking.Services.mileage) {
    services = "1 Extra Driver";
  } else if (booking.Services.mileage && !booking.Services.driver) {
    services = "Extra Mileage: " + booking.Services.mileage;
  } else if (booking.Services.driver && booking.Services.mileage) {
    services =
      "1 Extra Driver" + " & " + booking.Services.mileage + "km Extra Mileage";
  }

  // displays extra services if they're there, displays string if they're not
  let serviceComp;
  if (services) {
    serviceComp = <>{services}</>;
  } else {
    serviceComp = <>No extra services selected.</>;
  }

  return (
    <div className="overlay">
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>Manage Booking #{booking.Ref}</h3>

          <div className="editButtons">
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
            />
            <ButtonNoLink // delete booking not implemented
              color="GrayBtn"
              primary="true"
              className="buttonSmall"
              title="Delete Booking"
            />
          </div>
        </div>
        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="firstColumn">
                <h5>Pickup</h5>
                <p>{walkinComp}</p>
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
                <div className="rowButton">
                  <h5>Price</h5>

                  <div
                    style={{ borderBottom: "3px double", fontWeight: "bolder" }}
                  >
                    {getNumber(booking.price)} DKK
                  </div>
                </div>
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
    </div>
  );
}

export default ManageBookingModal;

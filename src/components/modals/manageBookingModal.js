import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingPickup } from "./bookingComponents/pickupInfo";
import { BookingReturn } from "./bookingComponents/returnInfo";
import { BookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { ExtraServices } from "./bookingComponents/extraServices";
import { Price } from "./bookingComponents/price";
import BOOKINGS from "../../data/bookings";
import FetchFunctions from "../DB-functions/FetchFunctions";
import updateEntries from "../DB-functions/UpdateEntries";

function ManageBookingModal(props) {
  const booking = FetchFunctions.fetchBookingFromRef(props.selectedBooking);

  const [editData, setEditData] = useState(false);

  const [pickupDate, setPickupDate] = useState(new Date(booking.Pickup.time));
  const [pickupTime, setPickupTime] = useState(booking.Pickup.time);
  const [pickupLocation, setPickupLocation] = useState(booking.Pickup.location);
  const [walkin, setWalkin] = useState(booking.isWalkin);
  const [returnDate, setReturnDate] = useState(new Date(booking.Return.Date));
  const [returnTime, setReturnTime] = useState(booking.Return.time);
  const [returnLocation, setReturnLocation] = useState(booking.Return.Location);
  const [carGroup, setCarGroup] = useState(booking.carGroup.name);
  const [extraDriver, setExtraDriver] = useState(booking.Services.driver);
  const [extraMileage, setExtraMileage] = useState(booking.Services.mileage);
  const [name, setName] = useState(booking.Customer.name);
  const [address, setAddress] = useState(booking.Customer.address);
  const [phone, setPhone] = useState(booking.Customer.phone);
  const [email, setEmail] = useState(booking.Customer.email);
  const [birthday, setBirthday] = useState(booking.Customer.born);
  const [licenseID, setLicenseID] = useState(booking.Customer.license.id);
  const [licenseIssueDate, setIssueDate] = useState(
    new Date(booking.Customer.license.issued)
  );
  const [licenseExpirationDate, setExpirationDate] = useState(
    new Date(booking.Customer.license.expires)
  );

  let buttonFunct = () => {
    confirmUpdate();
  };
  let buttonText = "Confirm Information";

  let services;
  let serviceComp;

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

  function displayBooking() {
    return (
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
    );
  }

  function onCloseModalReset() {
    setEditData(false);
    props.onClose();
  }

  function editBooking() {
    return (
      <div className="overlayBody">
        <div className="row">
          <div className="column">
            <div className="firstColumn">
              <BookingPickup
                pickupDate={pickupDate}
                time={pickupTime}
                location={pickupLocation}
                walkin={walkin}
                onChangeTime={(newTime) => {
                  setPickupTime(newTime);
                }}
                onChangeDate={(newDate) => {
                  setPickupDate(newDate);
                }}
                onChangeLocation={(newLocation) => {
                  setPickupLocation(newLocation);
                }}
                onChangeWalkin={(newBool) => {
                  setWalkin(newBool);
                }}
              />
              <BookingReturn
                date={returnDate}
                time={returnTime}
                location={returnLocation}
                onChangeTime={(newTime) => {
                  setReturnTime(newTime);
                }}
                onChangeDate={(newDate) => {
                  setReturnDate(newDate);
                }}
                onChangeLocation={(newLocation) => {
                  setReturnLocation(newLocation);
                }}
              />
              <BookingCarGroup
                carGroup={carGroup}
                onChangeCarGroup={(newCarGroup) => {
                  setCarGroup(newCarGroup);
                }}
              />
              <ExtraServices
                extraDriver={extraDriver}
                extraMileage={extraMileage}
                onChangeExtraDriver={(newExtraDriver) => {
                  setExtraDriver(newExtraDriver);
                }}
                onChangeExtraMileage={(newExtraMileage) => {
                  setExtraDriver(newExtraMileage);
                }}
              />
            </div>
          </div>
          <div className="column">
            <div className="secondColumn">
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
              <Price />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function editButton() {
    if (editData) {
      return null;
    } else {
      return (
        <buttonbox style={{ display: "flex", flexDirection: "row" }}>
          <ButtonNoLink // toggle manage booking modal
            color="DarkBlueBtn"
            primary="true"
            className="buttonSmall"
            title="Edit Booking"
            onClick={props.onClick}
          />

          <ButtonNoLink // we want to delete a booking
            color="DarkRedBtn"
            primary="true"
            className="buttonSmall"
            title="Delete Booking"
            onClick={() => alert("Booking Deleted")}
          />
        </buttonbox>
      );
    }
  }

  function updateBooking() {
    updateEntries.updateBooking(
      props.selectedBooking,
      walkin,
      carGroup,
      name,
      address,
      phone,
      email,
      birthday,
      licenseID,
      licenseIssueDate,
      licenseExpirationDate,
      pickupDate,
      pickupLocation,
      returnTime,
      returnLocation
    );
    console.log("Updated Booking " + name + ", Closing Overlay now");
    setEditData(!editData);
  }

  function confirmUpdate() {
    props.onConfirm();
  }

  function bookingContent() {
    if (editData) {
      buttonText = "Save Changes";
      buttonFunct = () => updateBooking();
      return editBooking();
    }
    if (!editData) {
      buttonText = "Confirm Information";
      buttonFunct = () => confirmUpdate();
      return displayBooking();
    }
  }

  if (!props.showManageBookingModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="reviewContent">
        <div className="overlayTitle">
          <h3>Manage Booking</h3>
          <p>Booking ID: {props.selectedBooking}</p>
          {editButton()}
        </div>
        {bookingContent()}
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Cancel"
            onClick={() => onCloseModalReset()}
          />
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Confirm Booking"
            onClick={() => buttonFunct()}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageBookingModal;

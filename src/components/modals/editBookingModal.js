import { React, useState } from "react";
import { ButtonNoLink, ButtonOnChange } from "../buttons/ColorButton";
import FetchFunctions from "../DB-functions/FetchFunctions";
import updateEntries from "../DB-functions/UpdateEntries";
import { EditBookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { ExtraServices } from "./bookingComponents/extraServices";
import { EditBookingPickup } from "./bookingComponents/pickupInfo";
import { Price } from "./bookingComponents/price";
import { EditBookingReturn } from "./bookingComponents/returnInfo";
import "./modal.css";

function EditBookingModal(props) {
  let updatedBooking = FetchFunctions.fetchBookingFromRef(
    props.selectedBooking
  );

  let bookingPickupTime =
    updatedBooking.Pickup.time.toLocaleTimeString("da-DA");
  const bookingPickupDate = new Date(
    updatedBooking.Pickup.time
  ).toLocaleDateString("da-DA");

  let bookingReturnTime = new Date(
    updatedBooking.Return.time
  ).toLocaleTimeString("da-DA");
  const bookingReturnDate = new Date(
    updatedBooking.Return.time
  ).toLocaleDateString("da-DA");

  const [pickupDate, setPickupDate] = useState(bookingPickupDate);
  const [pickupTime, setPickupTime] = useState(bookingPickupTime);
  const [pickupLocation, setPickupLocation] = useState(
    updatedBooking.Pickup.location
  );
  const [walkin, setWalkin] = useState(updatedBooking.isWalkin);
  const [returnDate, setReturnDate] = useState(bookingReturnDate);
  const [returnTime, setReturnTime] = useState(bookingReturnTime);
  const [returnLocation, setReturnLocation] = useState(
    updatedBooking.Return.location
  );
  const [carGroup, setCarGroup] = useState(updatedBooking.carGroup);
  const [name, setName] = useState(updatedBooking.Customer.name);
  const [address, setAddress] = useState(updatedBooking.Customer.address);
  const [phone, setPhone] = useState(updatedBooking.Customer.phone);
  const [email, setEmail] = useState(updatedBooking.Customer.email);
  const [birthday, setBirthday] = useState(updatedBooking.Customer.born);
  const [licenseID, setLicenseID] = useState(
    updatedBooking.Customer.license.id
  );
  const [licenseIssueDate, setIssueDate] = useState(
    new Date(updatedBooking.Customer.license.issued)
  );
  const [licenseExpirationDate, setExpirationDate] = useState(
    new Date(updatedBooking.Customer.license.expires)
  );
  const [extraDriver, setExtraDriver] = useState(
    updatedBooking.Services.driver
  );
  const [extraMileage, setExtraMileage] = useState(
    updatedBooking.Services.mileage
  );

  if (!props.showEditBookingModal) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>Manage Booking</h3>
          <p>Booking ID: {updatedBooking.Ref}</p>
        </div>
        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="firstColumn">
                <EditBookingPickup
                  date={pickupDate}
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
                <EditBookingReturn
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
                <EditBookingCarGroup
                  carGroup={carGroup}
                  onChangeCarGroup={(newCarGroup) => {
                    setCarGroup(newCarGroup);
                  }}
                />
                <ExtraServices
                  extraDriver={extraDriver}
                  onChangeExtraDriver={(newExtraDriver) => {
                    setExtraDriver(newExtraDriver);
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
                <Price />
              </div>
            </div>
          </div>
        </div>
        <div className="overlayFooter">
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="false"
            className="buttonLarge"
            title="Cancel"
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonLarge"
            title="Save Changes"
            onClick={props.onConfirm}
            booking={props.updatedBooking}
          />
        </div>
      </div>
    </div>
  );
}

export default EditBookingModal;

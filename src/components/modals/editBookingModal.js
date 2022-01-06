import { React, useState } from "react";
import { ButtonOnChange } from "../buttons/ColorButton";
import FetchFunctions from "../DB-functions/FetchFunctions";
import updateEntries from "../DB-functions/UpdateEntries";
import { EditBookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { ExtraServices } from "./bookingComponents/extraServices";
import { EditBookingPickup } from "./bookingComponents/pickupInfo";
import { Price } from "./bookingComponents/price";
import { EditBookingReturn } from "./bookingComponents/returnInfo";
import "./modal.css";
import updateDate from "../dataHandling/updateDate";
import { bookingPrice } from "../priceCalc";

function EditBookingModal(props) {
  let updatedBooking = FetchFunctions.fetchBookingFromRef(
    props.selectedBooking
  );
  const [pickupDate, setPickupDate] = useState(
    new Date(updatedBooking.Pickup.time)
  );
  const [pickupTime, setPickupTime] = useState(
    updatedBooking.Pickup.time.toLocaleTimeString("fr-CA")
  );
  const [pickupLocation, setPickupLocation] = useState(
    updatedBooking.Pickup.location.Location
  );
  const [walkin, setWalkin] = useState(updatedBooking.isWalkin);
  const [returnDate, setReturnDate] = useState(
    new Date(updatedBooking.Return.time)
  );
  const [returnTime, setReturnTime] = useState(
    updatedBooking.Return.time.toLocaleTimeString("fr-CA")
  );
  const [returnLocation, setReturnLocation] = useState(
    updatedBooking.Return.location.Location
  );
  const [carGroup, setCarGroup] = useState(updatedBooking.carGroup.name);
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
  const [price, setPrice] = useState(updatedBooking.price);

  function handleUpdate() {
    let pLocation = FetchFunctions.fetchLocationFromName(pickupLocation);
    let rLocation = FetchFunctions.fetchLocationFromName(returnLocation);

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
      alertString += "so please fill that out.";
      alert(alertString);
    } else {
      updateEntries.updateBooking(
        props.selectedBooking,
        updatedBooking.Status,
        walkin,
        FetchFunctions.fetchGroupFromGroupNameString(carGroup),
        name,
        address,
        phone,
        email,
        birthday,
        licenseID,
        licenseIssueDate,
        licenseExpirationDate,
        licenseExpirationDate > new Date(),
        updatedBooking.Car,
        updateDate(pickupDate, pickupTime),
        pLocation,
        updatedBooking.Pickup.fuel,
        updatedBooking.Pickup.mileage,
        updatedBooking.Pickup.comment,
        updateDate(returnDate, returnTime),
        rLocation,
        updatedBooking.Return.fuel,
        updatedBooking.Return.mileage,
        updatedBooking.Return.comment,
        extraDriver,
        extraMileage,
        updatedBooking.Returned.time,
        updatedBooking.Returned.mileage,
        bookingPrice(
          returnDate,
          returnTime,
          pickupDate,
          pickupTime,
          carGroup,
          extraDriver,
          extraMileage
        )[1]
      );
      alert("Update saved!");
      props.onConfirm();
    }
  }

  if (!props.showEditBookingModal) {
    return null;
  }

  function handlePriceChange(newPrice) {
    console.log(price);
    setPrice(newPrice);
    console.log(price);
  }

  return (
    <div className="overlay">
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>Edit Booking #{updatedBooking.Ref}</h3>
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
                    setPickupDate(new Date(newDate));
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
                    setReturnDate(new Date(newDate));
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
                  extraMileage={extraMileage}
                  onChangeExtraMileage={(newExtraMileage) => {
                    setExtraMileage(newExtraMileage);
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

                <Price
                  returnDate={returnDate}
                  returnTime={returnTime}
                  pickupDate={pickupDate}
                  pickupTime={pickupTime}
                  carGroup={carGroup}
                  extraDriver={extraDriver}
                  extraMileage={extraMileage}
                  price={props.price}
                  onChangePrice={(newPrice) => {
                    handlePriceChange(newPrice);
                  }}
                />
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
            onClick={props.onClose}
          />
          <ButtonOnChange
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Save Changes"
            onClick={() => handleUpdate()}
            booking={props.updatedBooking}
          />
        </div>
      </div>
    </div>
  );
}

export default EditBookingModal;

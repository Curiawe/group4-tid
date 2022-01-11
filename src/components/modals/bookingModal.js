import "./modal.css";
import { React, useState } from "react";
import { ButtonOnChange, ButtonNoLink } from "../buttons/ColorButton";
import { BookingPickup } from "./bookingComponents/pickupInfo";
import { BookingReturn } from "./bookingComponents/returnInfo";
import { BookingCarGroup } from "./bookingComponents/carGroup";
import { BookingCustomerInfo } from "./bookingComponents/customerInfo";
import { ExtraServices } from "./bookingComponents/extraServices";
import { Price } from "./bookingComponents/price";
import { BOOKINGS } from "../../data/bookings";
import addEntries from "../DB-functions/AddEntries";
import updateDate from "../dataHandling/updateDate";
import addCustomer from "../DB-functions/customers";

function BookingModal(props) {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState();
  const [walkin, setWalkin] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [returnTime, setReturnTime] = useState("");
  const [returnLocation, setReturnLocation] = useState();
  const [carGroup, setCarGroup] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [licenseID, setLicenseID] = useState();
  const [licenseIssueDate, setIssueDate] = useState();
  const [licenseExpirationDate, setExpirationDate] = useState();
  const [extraDriver, setExtraDriver] = useState(false);
  const [extraMileage, setExtraMileage] = useState(0);
  const [price, setPrice] = useState();

  if (!props.showBookingModal) {
    return null;
  }

  function newRef() {
    let length = BOOKINGS.length;
    let int = parseInt(BOOKINGS[length - 1].Ref) + 1;
    return int.toString();
  }

  // making an object out of the ID
  let licenseIdObejct = { id: licenseID };

  function onClickSave(e) {
    // create alert with missing parts

    const missing = [];

    if (!pickupDate) {
      missing.push("Pickup Date");
    }
    if (!pickupTime) {
      missing.push("Pickup Time");
    }
    if (!pickupLocation) {
      missing.push("Pickup Location");
    }
    if (!returnDate) {
      missing.push("Return Date");
    }
    if (!returnTime) {
      missing.push("Return Time");
    }
    if (!returnLocation) {
      missing.push("Return Location");
    }
    if (!carGroup) {
      missing.push("Car Group");
    }
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
    if (!email) {
      missing.push("Email");
    }

    if (missing.length > 0) {
      let alertString = "Sorry, you can't save, yet. You are missing: ";
      for (let i = 0; i < missing.length; i++) {
        alertString += missing[i] + ", ";
      }
      alertString += "so please fill that out.";
      alert(alertString);
    } else if (pickupDate > returnDate) {
      alert("The date of the return must be AFTER the pickup date.");
    } else {
      e.preventDefault();
      addEntries.addBooking(
        newRef(),
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
        updateDate(pickupDate, pickupTime),
        pickupLocation,
        updateDate(returnDate, returnTime),
        returnLocation,
        extraDriver,
        extraMileage,
        price
      );
      alert("Booking saved!");
      // adds the customer to the DB
      addCustomer(
        name,
        address,
        phone,
        email,
        licenseIdObejct,
        new Date(birthday)
      );
      props.onClose();
    }
  }

  function handlePriceChange(newPrice) {
    setPrice(newPrice);
  }

  return (
    <div className="overlay">
      <div className="bookingContent">
        <div className="overlayTitle">
          <h3>New Booking #{newRef()}</h3>
        </div>
        <div className="overlayBody">
          <div className="row">
            <div className="column">
              <div className="firstColumn">
                <BookingPickup
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
          <ButtonNoLink
            color="DarkBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Confirm Booking"
            onClick={(e) => onClickSave(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingModal;

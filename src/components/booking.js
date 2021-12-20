import { React, useState } from "react";
import { BookingReturn } from "./modals/bookingComponents/returnInfo";
import { BookingPickup } from "./modals/bookingComponents/pickupInfo";
import { Price } from "./modals/bookingComponents/price";
import { BookingCustomerInfo } from "./modals/bookingComponents/customerInfo";
import { BookingCarGroup } from "./modals/bookingComponents/carGroup";
import { ExtraServices } from "./modals/bookingComponents/extraServices";
import BOOKINGS from "../data/bookings";
import { ButtonOnChange, ButtonNoLink } from "./buttons/ColorButton";
import "../components/modals/modal.css";
import { AlignCenter } from "react-feather";

/* This is the final booking component */
function Booking(props) {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState();
  const [walkin, setWalkin] = useState(false);
  const [returnDate, setReturnDate] = useState();
  const [returnTime, setReturnTime] = useState("");
  const [returnLocation, setReturnLocation] = useState();
  const [carGroup, setCarGroup] = useState();
  const [extraDriver, setExtraDriver] = useState(false);
  const [extraMileage, setExtraMileage] = useState(false);
  const [mileage, setMileage] = useState(0);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [licenseID, setLicenseID] = useState();
  const [licenseIssueDate, setIssueDate] = useState();
  const [licenseExpirationDate, setExpirationDate] = useState();
  const [paymentMethod, setPaymentMethod] = useState();

  function newRef() {
    let length = BOOKINGS.length;
    let int = parseInt(BOOKINGS[length - 1].Ref) + 1;
    return int;
  }

  function addBooking() {
    let ref = newRef();
    BOOKINGS.push({
      Ref: ref,
      Status: "not begun",
      isWalkin: walkin,
      carGroup: carGroup,
      Customer: {
        name: name,
        address: address,
        phone: phone,
        email: email,
        born: birthday,
        license: {
          id: licenseID,
          issued: licenseIssueDate,
          expires: licenseExpirationDate,
          valid: true,
        },
        Car: null,
        Pickup: { time: pickupDate, location: pickupLocation },
        Return: { time: returnTime, location: returnLocation },
        Services: { driver: extraDriver, mileage: mileage },
        Returned: { time: null, mileage: 0 },
        price: 1000,
      },
    });
  }

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

    if (missing.length > 0) {
      let alertString = "Sorry, you can't save, yet. You are missing: ";
      for (let i = 0; i < missing.length; i++) {
        alertString += missing[i] + ", ";
      }
      alertString += " so please fill those out.";
      alert(alertString);
    } else {
      e.preventDefault();
      console.log("pushing to Array... lenght: " + BOOKINGS.length);
      addBooking();
      console.log("Pushed to Array: " + BOOKINGS.length);
      console.log(pickupLocation);
      console.log("Pickup Date: " + pickupDate);
      console.log("Pickup Time: " + pickupTime);
      console.log("Pickup Location: " + pickupLocation);
      console.log("Walkin? " + walkin);

      console.log(
        "current pickup: " +
          pickupDate +
          " at " +
          pickupTime +
          " at " +
          pickupLocation
      );
      console.log(
        "current return: " +
          returnDate +
          " at " +
          returnTime +
          " at " +
          returnLocation
      );
      console.log("car group: " + carGroup);
      console.log("extra driver? " + extraDriver);
      console.log("extra mileage? " + extraMileage + " how many? " + mileage);
      console.log(
        "name: " +
          name +
          " address: " +
          address +
          " phone number: " +
          phone +
          " email address: " +
          email +
          " birthday: " +
          birthday +
          " license ID: " +
          licenseID +
          " license issue date: " +
          licenseIssueDate +
          " license expiration date: " +
          licenseExpirationDate
      );
      console.log("payment method: " + paymentMethod);
    }
  }

  return (
    <>
      <div className="confirmationContainer">
        <div className="bookingConfirmation">
          <h3>Confirm booking *bookingID*</h3>
          <div>
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
          <div className="confirmButtons">
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
              title="Confirm Booking"
              onClick={(e) => onClickSave(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;

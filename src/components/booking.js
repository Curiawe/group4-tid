import React from "react";
import "./booking.css";

import { BOOKINGS } from "../data/bookings";
import { InputField } from "./inputfields+dropdowns/inputFields";
import { CheckBox } from "./selectionBoxes/selectionBoxes";
import {
  SelectCarGroup,
  SelectPaymentMethod,
  SelectLocation,
} from "./inputfields+dropdowns/dropDowns";
import { useState } from "react";
import "./popup.css";
import {
  ButtonStyled,
  ButtonNoLink,
  ButtonPopupError,
} from "./buttons/ColorButton";
import Pages from "../pages/Pages";

/* This is the page header */
function BookingHeader() {
  return (
    <div className="header">
      <div className="title">
        <h1>New Booking</h1>
      </div>
      <div className="bookingNumber">
        <p>Booking ID:</p>
      </div>
    </div>
  );
}

/* Pickup information */
function Pickup(props) {
  return (
    <div>
      <div className="rowLayout">
        <h5>Pick-up</h5>
        <div className="location">
          <SelectLocation
            onChange={(e) => props.onChangeLocation(e.target.value)}
          />
          <CheckBox
            className="checkBox"
            type="checkbox"
            checked={props.walkin}
            onChange={(e) => props.onChangeWalkin(e.target.checked)}
            buttonText="Walk-in"
          />
        </div>
        <div className="columnLayout">
          <InputField
            className="inputField"
            type="date"
            onChange={(e) => props.onChangeDate(e.target.value)}
            placeHolder="Select Date"
          />
          <InputField
            className="inputField"
            type="time"
            onChange={(e) => props.onChangeTime(e.target.value)}
            placeHolder="Select Time"
          />
        </div>
      </div>
    </div>
  );
}

/* Return information */
function Return(props) {
  return (
    <div>
      <div className="rowLayout">
        <h5>Return</h5>
        <div className="location">
          <SelectLocation
            onChange={(e) => props.onChangeLocation(e.target.value)}
          />
        </div>
        <div className=".columnLayout">
          <InputField
            className="inputField"
            type="date"
            onChange={(e) => props.onChangeDate(e.target.value)}
            placeHolder="Select Date"
          />
          <InputField
            className="inputField"
            type="time"
            onChange={(e) => props.onChangeTime(e.target.value)}
            placeHolder="Select Time"
          />
        </div>
      </div>
    </div>
  );
}

/* Horizontal line that divides the components */
function HorizontalLine() {
  return <hr />;
}

/* This is where the car group is selected */
function CarGroup(props) {
  return (
    <div className="rowLayout">
      <h5>Car Group</h5>
      <SelectCarGroup
        onChange={(e) => props.onChangeCarGroup(e.target.value)}
      />
    </div>
  );
}

export { CarGroup };

/* Here, the extra services is selected */
function ExtraServices(props) {
  return (
    <div className="rowLayout">
      <h5>Extra Services</h5>
      <div className="extraServicesSelect">
        <div className="extraDriverSelect">
          <CheckBox
            className="checkBox"
            type="checkbox"
            checked={props.extraDriver}
            onChange={(e) => props.onChangeExtraDriver(e.target.checked)}
            buttonText="Extra Driver"
          />
          <ButtonPopupError title="Add Extra Driver" className="buttonSmall" />
        </div>
        <div className="extraMileageSelect">
          <CheckBox
            className="checkBox"
            type="checkbox"
            checked={props.extraMileage}
            onChange={(e) => props.onChangeExtraMileage(e.target.checked)}
            buttonText="Extra Mileage"
          />
          <InputField
            className="inputField"
            type="text"
            onChange={(e) => props.onChangeMileage(e.target.value)}
            placeHolder="Enter Extra Mileage"
          />
        </div>
      </div>
    </div>
  );
}

/* This is where the information about the customer is registered */
function CustomerInformation(props) {
  return (
    <div className="rowLayout">
      <h5>Customer Information</h5>
      <div className="searchExisting">
        <ButtonPopupError
          title="Search Existing"
          color="LightBlueBtn"
          primary="true"
          className="buttonSmall"
        ></ButtonPopupError>
      </div>
      <div className="driverInfo">
        <InputField
          className="inputField"
          type="text"
          onChange={(e) => props.onChangeName(e.target.value)}
          placeHolder="Driver's Name"
        />
        <InputField
          className="inputField"
          type="address"
          onChange={(e) => props.onChangeAddress(e.target.value)}
          placeHolder="Driver's Address"
        />
        <InputField
          className="inputField"
          type="tel"
          onChange={(e) => props.onChangePhone(e.target.value)}
          placeHolder="Driver's Phone Number"
        />
        <InputField
          className="inputField"
          type="email"
          onChange={(e) => props.onChangeEmail(e.target.value)}
          placeHolder="Driver's Email Address"
        />
        <InputField
          className="inputField"
          type="date"
          onChange={(e) => props.onChangeBirthday(e.target.value)}
          placeHolder="Driver's Date of Birth"
        />
        <InputField
          className="inputField"
          type="text"
          onChange={(e) => props.onChangeLicenseID(e.target.value)}
          placeHolder="Driver's License ID"
        />
        <InputField
          className="inputField"
          type="date"
          onChange={(e) => props.onChangeIssueDate(e.target.value)}
          placeHolder="Licence Issue Date"
        />
        <InputField
          className="inputField"
          type="date"
          onChange={(e) => props.onChangeExpirationDate(e.target.value)}
          placeHolder="License Expiration Date"
        />
      </div>
    </div>
  );
}

/* This is where the payment method is selected */
function Payment(props) {
  return (
    <div className="rowLayout">
      <h5>Payment</h5>
      <div className="payment">
        <div className="info">
          <div className="infoType">Payment Method:</div>
          <SelectPaymentMethod
            onChange={(e) => props.onChangePaymentMethod(e.target.value)}
          />
        </div>
        <div className="info">
          <div className="infoType">Deposit:</div>
          <div className="inputField">500 DKK</div>
        </div>
        <div className="info">
          <div className="infoType">Total:</div>
          <div className="inputField">total</div>
        </div>
      </div>
    </div>
  );
}

/* These are the buttons to either cancel, delete or confirm the booking */
function BookingButtons() {
  return (
    <div className="threeBtns">
      <div className="stackedBtns">
        <ButtonStyled
          link=""
          title="Delete Booking"
          color="DarkRedBtn"
          primary="false"
          className="buttonSmall"
        />
        <ButtonStyled
          link={Pages.BookingLandingPage}
          title="Cancel Booking"
          color="PurpleBtn"
          primary="false"
          className="buttonSmall"
        />
      </div>
      <div className="finishBtn"></div>
    </div>
  );
}

/* This is the final booking component */
function Booking() {
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
    <div className="booking" style={{ marginLeft: "32px" }}>
      <BookingHeader />
      <Pickup
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
      <Return
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
      <HorizontalLine />
      <CarGroup
        carGroup={carGroup}
        onChangeCarGroup={(newCarGroup) => {
          setCarGroup(newCarGroup);
        }}
      />
      <ExtraServices
        extraDriver={extraDriver}
        extraMileage={extraMileage}
        mileage={mileage}
        onChangeExtraDriver={(newBool) => {
          setExtraDriver(newBool);
        }}
        onChangeExtraMileage={(newBool) => {
          setExtraMileage(newBool);
        }}
        onChangeMileage={(newMileage) => {
          setMileage(newMileage);
        }}
      />
      <HorizontalLine />
      <CustomerInformation
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
      <HorizontalLine />
      <Payment
        paymentMethod={paymentMethod}
        onChangePaymentMethod={(newPaymentMethod) => {
          setPaymentMethod(newPaymentMethod);
        }}
      />
      <BookingButtons />
      <ButtonNoLink
        onClick={(e) => onClickSave(e)}
        title="Confirm Booking"
        color="DarkBlueBtn"
        primary="true"
        className="buttonLarge"
      />
    </div>
  );
}

export default Booking;

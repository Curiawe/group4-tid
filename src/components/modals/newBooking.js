import { React, useState } from "react";
import { BOOKINGS } from "../data/bookings";

/*
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
      missing.push("Phone Number");
    }
    if (!email) {
      missing.push("Email Address");
    }
    if (!birthday) {
      missing.push("Driver's Birthday");
    }
    if (!licenseID) {
      missing.push("License ID");
    }
    if (!licenseIssueDate) {
      missing.push("License Issue Date");
    }
    if (!licenseExpirationDate) {
      missing.push("License Expiration Date");
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
    
     <div>
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
      <CarGroup
        carGroup={carGroup}
        onChangeCarGroup={(newCarGroup) => {
          setCarGroup(newCarGroup);
        }}
      />
     
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

*/

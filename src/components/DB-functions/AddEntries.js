import { bookingStates } from "../../data/bookingStates";
import { BOOKINGS } from "../../data/bookings";
import FetchFunctions from "./FetchFunctions";

const addEntries = {
  /**
   *
   * @param {String} ref
   * @param {boolean} walkin
   * @param {carGroup} carGroupN
   * @param {String} customerName
   * @param {String} customerAddress
   * @param {String} customerPhone
   * @param {String} customerEmail
   * @param {Date} customerBirthday
   * @param {int} licenseID
   * @param {Date} licenseIssued
   * @param {Date} licenseExpires
   * @param {Date} pickupTime
   * @param {Location} pickupLocation
   * @param {Date} returnTime
   * @param {Location} returnLocation
   */
  addBooking: (
    ref,
    walkin,
    carGroupName,
    customerName,
    customerAddress,
    customerPhone,
    customerEmail,
    customerBirthday,
    licenseID,
    licenseIssued,
    licenseExpires,
    pickupTime,
    pickupLocation,
    returnTime,
    returnLocation,
    extraDriver,
    extraMiles,
    price
  ) => {
    BOOKINGS.push(
      // first, save the object
      {
        Ref: ref,
        Status: bookingStates.BOOKED,
        isWalkin: walkin,
        carGroup: FetchFunctions.fetchGroupFromGroupNameString(carGroupName),
        Customer: {
          name: customerName,
          address: customerAddress,
          phone: customerPhone,
          email: customerEmail,
          born: customerBirthday,
          license: {
            id: licenseID,
            issued: licenseIssued,
            expires: licenseExpires,
            valid: licenseExpires > new Date(),
          },
        },
        Car: null,
        Pickup: {
          time: pickupTime,
          location: FetchFunctions.fetchLocationFromName(pickupLocation),
          fuel: 100,
          mileage: 0,
          comment: "",
        },
        Return: {
          time: returnTime,
          location: FetchFunctions.fetchLocationFromName(returnLocation),
          fuel: 100,
          mileage: 0,
          comment: "",
        },
        BillAs: null,
        Services: {
          driver: extraDriver,
          mileage: extraMiles,
        },
        Returned: { time: null, mileage: 0 },
        price: price,
      }
    );
  },
};
export default addEntries;

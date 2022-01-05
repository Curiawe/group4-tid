import FetchFunctions from "./FetchFunctions";
import { bookingStates } from "../../data/bookingStates";
import { CARSTATES } from "../../data/carStates";

const updateEntries = {
  updateCustomer: (
    ref,
    name,
    address,
    phone,
    email,
    born,
    id,
    issued,
    expires
  ) => {
    let customer = FetchFunctions.fetchBookingFromRef(ref).Customer;
    console.log("Customer Found: " + customer.name);
    customer.name = name;
    customer.address = address;
    customer.phone = phone;
    customer.email = email;
    customer.born = born;
    customer.license.id = id;
    customer.license.issued = issued;
    customer.license.expires = expires;
    customer.license.valid = new Date() < expires;
  },

  updateCustomer: (
    ref,
    name,
    address,
    phone,
    email,
    born,
    id,
    issued,
    expires
  ) => {
    let customer = FetchFunctions.fetchBookingFromRef(ref).Customer;
    customer.name = name;
    customer.address = address;
    customer.phone = phone;
    customer.email = email;
    customer.born = born;
    customer.license.id = id;
    customer.license.issued = issued;
    customer.license.expires = expires;
    customer.license.valid = new Date() < expires;
  },

  udpateCarStatus: (license, status) => {
    let car = FetchFunctions.fetchCarFromLicense(license); // now we have CAR
    car.Status = status;
  },

  /**
   * Updates a booking for Pickup, linking the Car with the booking item.
   * Saves additional information and changing Booking Status to
   * "Picked up" as well as Car Status to "Rented".
   *
   * @param {String} ref
   * @param {Car} car
   * @param {CarGroup} billAs
   * @param {int} mileage
   * @param {int} fuel
   * @param {String} comment
   */
  updateBookingForPickup: (ref, car, billAs, mileage, fuel, comment) => {
    let booking = FetchFunctions.fetchBookingFromRef(ref); // now we have BOOKING
    if (booking.Car) {
      updateEntries.udpateCarStatus(car.License, CARSTATES.READY); // if there was already a car selected for some reason, reset it to "ready"
    }
    booking.Car = car;
    booking.BillAs = billAs;
    booking.Pickup.mileage = mileage;
    booking.Status = bookingStates.PICKEDUP;
    if (car) {
      // if there is a car selected, update the fuel status
      car.fuelStatus = fuel;
    }
    booking.Comment = comment;
    updateEntries.udpateCarStatus(car.License, CARSTATES.RENTED);
    alert(
      "Car Pickup for " +
        booking.Car.License +
        " registered. Booking " +
        ref +
        " now picked up."
    );
  },

  updateBooking: (
    ref,
    status,
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
    isValid,
    car,
    pickupDate,
    pickupLocation,
    pickupFuel,
    pickupMileage,
    pickupComment,
    returnDate,
    returnLocation,
    returnFuel,
    returnMileage,
    returnComment,
    extraDriver,
    extraMileage,
    returnedTime,
    returnedMileage,
    price
  ) => {
    let booking = FetchFunctions.fetchBookingFromRef(ref);
    booking.Status = status;
    booking.isWalkin = walkin;
    booking.carGroup = carGroup;
    booking.Customer.name = name;
    booking.Customer.address = address;
    booking.Customer.phone = phone;
    booking.Customer.email = email;
    booking.Customer.born = birthday;
    booking.Customer.license.id = licenseID;
    booking.Customer.license.issued = licenseIssueDate;
    booking.Customer.license.expires = licenseExpirationDate;
    booking.Customer.license.valid = isValid;
    booking.Car = car;
    booking.Pickup.time = new Date(pickupDate);
    booking.Pickup.location = pickupLocation;
    booking.Pickup.fuel = pickupFuel;
    booking.Pickup.mileage = pickupMileage;
    booking.Pickup.comment = pickupComment;
    booking.Return.time = new Date(returnDate);
    booking.Return.location = returnLocation;
    booking.Return.fuel = returnFuel;
    booking.Return.mileage = returnMileage;
    booking.Return.comment = returnComment;
    booking.Services.driver = extraDriver;
    booking.Services.mileage = extraMileage;
    booking.Returned.time = new Date(returnedTime);
    booking.Returned.mileage = returnedMileage;
    booking.price = price;
  },
};

export default updateEntries;

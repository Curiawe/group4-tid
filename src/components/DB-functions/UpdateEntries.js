import FetchFunctions from "./FetchFunctions"
import { bookingStates } from "../../data/bookingStates";
import { CARSTATES } from "../../data/carStates";

const updateEntries = {

    updateCustomer : (ref, name, address, phone, email, born, id, issued, expires) => {
        let customer = FetchFunctions.fetchBookingFromRef(ref).Customer;
        customer.name = name;
        customer.address = address;
        customer.phone = phone;
        customer.email = email;
        customer.born = born;
        customer.license.id = id;
        customer.license.issued= issued;
        customer.license.expires=expires;
        customer.license.valid=(new Date() < expires)
    },

    udpateCarStatus : (license, status) => {
        let car = FetchFunctions.fetchCarFromLicense(license) // now we have CAR
        car.Status = status
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
    updateBookingForPickup : (ref, car, billAs, mileage, fuel, comment) => {
        let booking = FetchFunctions.fetchBookingFromRef(ref) // now we have BOOKING
        if (booking.Car) {
            updateEntries.udpateCarStatus(car.License, CARSTATES.READY) // if there was already a car selected for some reason, reset it to "ready"
        }
        booking.Car = car
        booking.BillAs = billAs
        booking.Pickup.mileage = mileage
        booking.Status = bookingStates.PICKEDUP
        if (car) { // if there is a car selected, update the fuel status
            car.fuelStatus = fuel
        }
        booking.Comment = comment
        updateEntries.udpateCarStatus(car.License, CARSTATES.RENTED)
        alert("Car Pickup for " + booking.Car.License + " registered. Booking " + ref + " now picked up.")

    },


}

export default updateEntries
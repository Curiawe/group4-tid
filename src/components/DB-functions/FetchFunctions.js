import {BOOKINGS} from "../../data/bookings"
import { CARGROUPS } from "../../data/carGroups"
import { CARS } from "../../data/cars"
import { LOCATIONS } from "../../data/locations"

/**
 * This constant contains several functions that fetch specific elements from the Database and return them.
 * 
 */
const FetchFunctions = {

    /**
     * 
     * @param {*} ref the booking reference of a given booking
     * @returns {BOOKINGS} matching Booking element from the database
     */
     fetchBookingFromRef: (ref) => {
        let foundBooking = BOOKINGS.find((bkng) => (ref === bkng.Ref)   
        )
        return foundBooking
    },

    fetchCustomerFromBookingRef : (booking) => {
        try {
        let Bkng = FetchFunctions.fetchBookingFromRef(booking)
        return (Bkng.Customer)   
        } catch (error) {
        return new Error(error)
        }
    },

    fetchCarFromLicense : (license) => {
        let car = CARS.find((c) => (c.License === license) 
        )
        return car
    },

    fetchGroupFromGroupNameString : (groupName) => {
        let group = CARGROUPS.find((g) => (g.name === groupName))
        return group
    },

    fetchLocationFromName : (locationName) => {
        let location = LOCATIONS.find((l) => (l.Location === locationName))
        return location
    }
}

export default FetchFunctions
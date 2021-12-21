import BOOKINGS from "../../data/bookings"
import { CARGROUPS } from "../../data/carGroups"
import { CARS } from "../../data/cars"

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
        BOOKINGS.find((bkng) => (ref === bkng.Ref))
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
        let car = CARS.find((c) => {
            if (c.License === license) {
                return c
                }
            }
        )
        return car
    },

    fetchGroupFromGroupNameString : (groupName) => {
        let group = CARGROUPS.find((g) => {
            if (g.name === groupName) {
                return g
            }
        })
        return group
    }


}

export default FetchFunctions
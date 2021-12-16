import BOOKINGS from "../data/bookings"

const FetchFunctions = {

    fetchBookingFromRef: (ref) => {
        let foundBooking
        BOOKINGS.find((bkng) => {
           if (ref === bkng.Ref) {
               foundBooking = bkng
           }
        })
        return foundBooking
    },

    fetchCustomerFromBookingRef : (booking) => {
        try {
        let Bkng = FetchFunctions.fetchBookingFromRef(booking)
        console.log("I found the booking " + Bkng.Ref)
        console.log("Returning Customer: " + Bkng.Customer.name)
        return (Bkng.Customer)   
        } catch (error) {
        return new Error(error)
        }
    }

}

export default FetchFunctions
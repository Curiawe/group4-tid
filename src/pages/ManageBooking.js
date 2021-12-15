import ExistingBooking from '../components/booking'
import Booking from '../components/booking';
import getLocalStorage from '../components/localStorage-actions/localStorage-get'


function ManageBooking () {

    const ref = getLocalStorage("bookingRef");

    return (
        <>
        <ExistingBooking booking={ref} key={ref}/> 
               </>

    )
}

export default ManageBooking
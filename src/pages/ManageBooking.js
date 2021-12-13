import ExistingBooking from '../components/booking'
import Booking from '../components/booking';
import getLocalStorage from '../components/localStorage-actions/localStorage-get'


function ManageBooking () {

    const ref = getLocalStorage("bookingRef");
    let returnComp = []
    if (ref) {
        returnComp.push(<ExistingBooking booking={ref} key={ref}/>)
    } else {
        returnComp.push(<Booking key=""/>)
    }

    return (
        <>
            {returnComp}
        </>

    )
}

export default ManageBooking
import NavButtons from "../components/navigation/navigationButtons"
import Pages from "./Pages"
import Booking from "../components/booking"

function BookingLanding () {
    return (
       
        <NavButtons 
            linkButtonOne={Pages.BookingOverview}
            elementOne={<Booking/>}
            linkButtonTwo={Pages.Pickup}
            linkButtonThree={Pages.Return}
            textButtonOne="Create Booking" 
            textButtonTwo="Pickup" 
            textButtonThree="Return"> 
        </NavButtons>

    )
}

export default BookingLanding
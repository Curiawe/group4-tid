import {NavButtons} from "../components/navigation/navigationButtons"
import Pages from "./Pages"

function BookingLanding () {
    return (
       
        <NavButtons 
            linkButtonOne={Pages.BookingOverview}
            linkButtonTwo={Pages.Pickup}
            linkButtonThree={Pages.Return}
            textButtonOne="Create Booking" 
            textButtonTwo="Pickup" 
            textButtonThree="Return"> 
        </NavButtons>

    )
}

export default BookingLanding
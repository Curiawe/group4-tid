<<<<<<< HEAD

import {NavButtons} from '../components/navigation/navigationButtons'
import Pages from './Pages'

function Home () {
    return (
        <NavButtons
            linkButtonOne={Pages.BookingLandingPage}
            linkButtonTwo={Pages.RentalLandingPage}
            linkButtonThree={Pages.GroupLandingPage}
            textButtonOne="Booking Management" 
            textButtonTwo="Rental Management"
            textButtonThree="Group Management"/>
=======
function Home () {
    return (
        <h1>Welcome</h1>
>>>>>>> 80cef4e (update)
    )
}

export default Home
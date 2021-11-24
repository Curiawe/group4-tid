import NavButtons from '../components/navigation/navigationButtons'
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
    )
}

export default Home
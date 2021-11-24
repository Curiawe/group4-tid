import NavButtons from "../components/navigation/navigationButtons"
import Pages from "./Pages"

function GroupLanding () {
    return (
        <NavButtons
            linkButtonOne={Pages.RentalOffices}
            linkButtonTwo={Pages.CarGroups}
            linkButtonThree={Pages.Walkins}
            textButtonOne="Rental Offices" 
            textButtonTwo="Car Groups"
            textButtonThree="Third Button"/>

    )
}

export default GroupLanding
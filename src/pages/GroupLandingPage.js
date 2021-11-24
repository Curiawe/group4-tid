import { TwoNavButtons } from "../components/navigation/navigationButtons"
import Pages from "./Pages"

function GroupLanding () {
    return (
        <TwoNavButtons
            linkButtonOne={Pages.RentalOffices}
            linkButtonTwo={Pages.CarGroups}
            textButtonOne="Rental Offices" 
            textButtonTwo="Car Groups"/>
    
    )
}

export default GroupLanding
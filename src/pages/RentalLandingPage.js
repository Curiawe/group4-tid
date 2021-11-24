import { NavButtons } from "../components/navigation/navigationButtons"
import Pages from "./Pages"

function RentalLanding () {
    return (
        <NavButtons 
            linkButtonOne={Pages.TransferRequest}
            linkButtonTwo={Pages.TransferRequest}
            linkButtonThree={Pages.Walkins}
            textButtonOne="Request Car" 
            textButtonTwo="Release Car" 
            textButtonThree="Estimate Walkins"/>
    )
}

export default RentalLanding
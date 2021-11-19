import './navigation.css';
import logo from './logo.png';
import Pages from '../../pages/Pages';
import Navtab from './Navtab'

function Navigation () {
    return (
        <header>
            <div className="Navtabs">
                <div className ="Navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <Navtab title="Booking Management" link={Pages.Schedule}/>
                <Navtab title="Rental Management" link={Pages.DailyOverview}/>
                <Navtab title="Group Management" link={Pages.RentalOffices}/>
            </div>
            
        </header>
    )
}

export default Navigation;
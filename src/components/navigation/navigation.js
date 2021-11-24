import './navigation.css';
import logo from './logo.png';
import Pages from '../../pages/Pages';
import Navtab from './Navtab'


function Navigation () {
    return (
        <header>
            <div className="Navtabs">
                <div className ="Navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <Navtab title="Booking Management" link={Pages.BookingLandingPage}/>
                <Navtab title="Rental Management" link={Pages.RentalLandingPage}/>
                <Navtab title="Group Management" link={Pages.GroupLandingPage}/>
            </div>
            
        </header>
    )
}

export default Navigation;
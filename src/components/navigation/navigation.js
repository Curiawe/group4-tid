import './navigation.css';
import logo from './logo.png';
import Pages from '../../pages/Pages';
import PageGroups from '../navigation/PageGroups';
import Navtab from './Navtab'
import { Link } from 'react-router-dom';

function Navigation () {

    return (
        <header>
            <div className="Navtabs">
                <Link to={Pages.Home} className ="Navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"/></Link>
                <Navtab title="Booking Management" link={Pages.BookingLandingPage}/>
                <Navtab title="Rental Management" link={Pages.RentalLandingPage}/>
                <Navtab title="Group Management" link={Pages.GroupLandingPage}/>

            </div>
        </header>
    )
}

export default Navigation;
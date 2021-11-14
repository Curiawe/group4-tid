import './navigation.css';
import logo from './logo.png';
//import logo from '.\.\public\logo.png';

function Navigation () {
    return (
        <header>
            <div class="navtabs">
                <div class ="navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <div class="navTabActive">Booking Management</div>
                <div class ="navtab">Rental Management</div>
                <div class="navtab">Group Management</div>
            </div>
            
        </header>
    )
}

export default Navigation;
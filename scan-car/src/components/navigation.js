import './navigation.css';
import logo from './logo.png';
//import logo from '.\.\public\logo.png';

function Navigation () {
    return (
        <header>
            <div class="navtabs">
                <navTab><img id="Logo" src={logo} alt="ScanCar Logo"></img></navTab>
                <div class="navtab">Booking Management</div>
                <div class ="navtab">Rental Management</div>
                <div class="navtab">Group Management</div>
            </div>
            
        </header>
    )
}

export default Navigation;
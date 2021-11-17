import './navigation.css';
import logo from './logo.png';

function Navigation () {
    return (
        <header>
            <div className="navtabs">
                <div className ="navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <div className="navTabActive">Booking Management</div>
                <div className="navtab">Rental Management</div>
                <div className="navtab">Group Management</div>
            </div>
            
        </header>
    )
}

export default Navigation;
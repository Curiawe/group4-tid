import React from 'react';
import './navigation.css';
import logo from './logo.png';
//import logo from '.\.\public\logo.png';

function Navigation () {
    return (
        <header>
            <div class="navtabs">
                <div class-name="navtab-Logo" activeStyle><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <div class-name="navTabActive">Booking Management</div>
                <div class-name="navtab" activeStyle>Rental Management</div>
                <div class="navtab" activeStyle>Group Management</div>
            </div>
            
        </header>
    )
}

export default Navigation;
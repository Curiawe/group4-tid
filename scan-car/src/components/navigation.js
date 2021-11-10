import React from 'react';
import './navigation.css';
import { NavLink as Link } from "react-router-dom";
import logo from './logo.png';
//import logo from '.\.\public\logo.png';

function Navigation () {
    return (
        <header>
            <div class="navtabs">
                <Link to= "/" class-name="navtab-Logo" activeStyle><img src={logo} alt="ScanCar Logo" height="40px"></img></Link>
                <div class-name="navTabActive"><Link to="/" activeStyle>Booking Management</Link></div>
                <Link to="/" class-name="navtab" activeStyle>Rental Management</Link>
                <Link to="/" class="navtab" activeStyle>Group Management</Link>
            </div>
            
        </header>
    )
}

export default Navigation;
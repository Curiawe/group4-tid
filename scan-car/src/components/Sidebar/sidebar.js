import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./sidebarElements";


const Sidebar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/bookings" activeStyle>
                    Booking Overvew
                </NavLink>
                <NavLink to="/bookingSearch" activeStyle>
                    Booking Search
                </NavLink>
                <NavLink to="/cars" activeStyle>
                    Car Overview
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/schedule">Schedule</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Sidebar;

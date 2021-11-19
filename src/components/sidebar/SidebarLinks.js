import './sidebar.css'
import Pages from '../../pages/Pages'

import { NavLink } from 'react-router-dom'

function checkActive(link) {
    return ("http://localhost:3000/" === (document.baseURI.replace(link, "")))
}

function SidebarLink (props) {
    console.log (props.title + ". Currently active link: " + checkActive(props.link))
    return (
        <NavLink to={props.link} className="sidebar-link" activeClassName="active-side-link"
            style={{ textDecoration: 'none', color:'white'}}>
                {props.title}
        </NavLink>
    )
}

function RentalOperations () {
    return (
        <nav className = "SidebarLinks">
            <SidebarLink title="Booking Overview" link={Pages.BookingOverview}/>
            <SidebarLink title="Booking Search" link={Pages.BookingSearch}/>
            <SidebarLink title="Car Overview"link={Pages.Cars}/>
            <SidebarLink title="Schedule"link={Pages.Schedule}/>
        </nav> 
    )
}

function RentalManagement () {
    return (
        <nav className = "SidebarLinks">
        <SidebarLink title="Daily Overview" link={Pages.DailyOverview}/>
        <SidebarLink title="Transfers"link={Pages.TransferRequest}/>
        <SidebarLink title="Walk-ins" link={Pages.Walkins}/>
    </nav> 
    )
}

function GroupManagement () {
    return (
        <nav className = "SidebarLinks">
        <SidebarLink title="Car Groups" link={Pages.CarGroups}/>
        <SidebarLink title="Rental Offices" link={Pages.RentalOffices}/>
    </nav> 
    )
}

export default function SidebarLinks () {
    return (
        <nav>
            <RentalOperations />
            <RentalManagement />
            <GroupManagement />
        </nav>
    )
}
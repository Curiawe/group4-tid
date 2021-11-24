import './sidebar.css'
import Pages from '../../pages/Pages'

import {Link} from 'react-router-dom'

function SidebarLink (props) {
    return (
        <Link to={props.link} className={props.className} style={{ textDecoration: 'none', color:'white'}}>{props.title}</Link>
    )
}

function RentalOperations () {
    return (
        <nav className = "SidebarLinks">
            <SidebarLink className = "SidebarLink" title="Booking Overview" link={Pages.BookingOverview}/>
            <SidebarLink className = "SidebarLink" title="Booking Search" link={Pages.BookingSearch}/>
            <SidebarLink className = "SidebarLink" title="Car Overview"link={Pages.Cars}/>
            <SidebarLink className = "SidebarLink" title="Schedule"link={Pages.Schedule}/>
        </nav> 
    )
}

function RentalManagement () {
    return (
        <nav className = "SidebarLinks">
        <SidebarLink className = "SidebarLink" title="Daily Overview" link={Pages.DailyOverview}/>
        <SidebarLink className = "SidebarLink" title="Transfers"link={Pages.TransferRequest}/>
        <SidebarLink className = "SidebarLink" title="Walk-ins" link={Pages.Walkins}/>
    </nav> 
    )
}

function GroupManagement () {
    return (
        <nav className = "SidebarLinks">
        <SidebarLink className = "SidebarLink" title="Car Groups" link={Pages.CarGroups}/>
        <SidebarLink className = "SidebarLink" title="Rental Offices" link={Pages.RentalOffices}/>
    </nav> 
    )
}

export default function SidebarLinks () {
    return (
        <sidebar>
            <RentalOperations />
            <RentalManagement />
            <GroupManagement />
        </sidebar>
    )
}
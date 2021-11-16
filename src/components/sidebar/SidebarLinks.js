import './sidebar.css'

function RentalOperations () {
    return (
        <nav className = "sidebarLinks">
            <sidebarLink className = "sidebarLink">Booking Overview</sidebarLink>
            <sidebarLink className = "sidebarLink">Booking Search</sidebarLink>
            <sidebarLink className = "sidebarLink">Car Overview</sidebarLink>
            <sidebarLink className = "sidebarLink">Schedule</sidebarLink>
        </nav> 
    )
}

function RentalManagement () {
    return (
        <nav className = "sidebarLinks">
        <sidebarLink className = "sidebarLink">Daily Overview</sidebarLink>
        <sidebarLink className = "sidebarLink">Transfers</sidebarLink>
        <sidebarLink className = "sidebarLink">Walk-ins</sidebarLink>
    </nav> 
    )
}

function GroupManagement () {
    return (
        <nav className = "sidebarLinks">
        <sidebarLink className = "sidebarLink">Car Groups</sidebarLink>
        <sidebarLink className = "sidebarLink">Rental Offices</sidebarLink>
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
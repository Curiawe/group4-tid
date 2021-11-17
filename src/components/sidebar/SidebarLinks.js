import './sidebar.css'

function SidebarLink (props) {
    return (
        <li className={props.className}>{props.title}</li>
    )
}

function RentalOperations () {
    return (
        <nav className = "SidebarLinks">
            <SidebarLink className = "SidebarLink" title="Booking Overview"/>
            <SidebarLink className = "SidebarLink" title="Booking Search"/>
            <SidebarLink className = "SidebarLink" title="Car Overview"/>
            <SidebarLink className = "SidebarLink" title="Schedule"/>
        </nav> 
    )
}

function RentalManagement () {
    return (
        <nav className = "sidebarLinks">
        <SidebarLink className = "SidebarLink" title="Daily Overview"/>
        <SidebarLink className = "SidebarLink"title="Transfers"/>
        <SidebarLink className = "SidebarLink" title="Walk-ins"/>
    </nav> 
    )
}

function GroupManagement () {
    return (
        <nav className = "SidebarLinks">
        <SidebarLink className = "SidebarLink" title="Car Groups"/>
        <SidebarLink className = "SidebarLink" title="Rental Offices"/>
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
import './sidebar.css';
import SidebarLinks from './SidebarLinks'

function Sidebar () {
    return (
        <nav className="sidebarcontainer">
            <SidebarLinks />
        </nav>
    )
}

export default Sidebar;
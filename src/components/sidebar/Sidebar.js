import './sidebar.css';
import SidebarLinks from './SidebarLinks'

function Sidebar () {
    return (
        <nav className="SidebarContainer">
            <SidebarLinks />
        </nav>
    )
}

export default Sidebar;
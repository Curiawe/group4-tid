import './sidebar.css';
import SidebarLinks from './SidebarLinks'
import { mapToSidebarLink } from './SidebarLinks';
import Pages from '../../pages/Pages';

function Sidebar () {
    return (
        <nav className="SidebarContainer">
            <SidebarLinks/>
            {mapToSidebarLink(Pages.BookingManagement)}
        </nav>
    )
}

export default Sidebar;
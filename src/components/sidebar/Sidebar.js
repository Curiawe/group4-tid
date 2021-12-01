import './sidebar.css';
import SidebarLinks from './SidebarLinks'
import Pages from '../../pages/Pages';

function Sidebar () {
    return (
        <nav className="SidebarContainer">
            <SidebarLinks/>
        </nav>
    )
}

export default Sidebar;
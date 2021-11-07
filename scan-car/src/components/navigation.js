import './navigation.css';
import logo from './logo.png';
//import logo from '.\.\public\logo.png';

function Navigation () {
    return (
        <header>
            <div id="navTabs">
                <navTab><img id="Logo" src={logo} alt="ScanCar Logo"></img></navTab>
                <navTab>Hello</navTab>
                <navTab>My Name</navTab>
                <navTab>Is Hell</navTab>
            </div>
        </header>
    )
}

export default Navigation;
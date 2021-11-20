import './navigation.css';
import logo from './logo.png';
import Pages from '../../pages/Pages';
import PageGroups from '../navigation/PageGroups';
import Navtab from './Navtab'

/* function compareURL (props){
    const title = props.title.replace(" ","")
    return (props.link === Pages[title])
} */

function getLinkList (props) {
    let returnArray = []
    returnArray = PageGroups[props.title]
    return returnArray
}

/**
 * 
 * @param {title, link} props 
 * @returns boolean - is this a current page or not?
 */
function conditionalRender(props) {
    let current = false
    const title = props.title.replace(" ","")
    const pageList = getLinkList(title)
    pageList.map( 
        (p) => Pages[p] !== props.link ? false 
        : current = true
    )
    return current
}




function Navigation () {
    return (
        <header>
            <div className="Navtabs">
                <div className ="Navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <Navtab pagegroup={PageGroups.RentalOperations} title="Booking Management" link={Pages.Schedule}/>
                <Navtab pagegroup={PageGroups.RentalManagement} title="Rental Management" link={Pages.DailyOverview}/>
                <Navtab pagegroup={PageGroups.GroupManagement} title="Group Management" link={Pages.RentalOffices}/>
            </div>
        </header>
    )
}

export default Navigation;
import {ScheduleTable} from "../components/schedule/ScheduleTiles"; 
import Filters from "../components/schedule/FilterRow";

function Schedule (props) {
    return (
        <div style={{marginLeft:"64px", display:"flex", flexDirection:"column", flexWrap:"wrap"}}>

            <h1>Schedule go BRRRRR~</h1>
            <Filters />
            <ScheduleTable/>
        </div>
    )
}

export default Schedule
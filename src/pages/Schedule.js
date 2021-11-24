import {ScheduleTable} from "../components/schedule/ScheduleTiles"; 
import Filters from "../components/schedule/FilterRow";

function Schedule (props) {
    return (
        <div style={{marginLeft:"64px"}}>

            <h1>Schedule go BRRRRR~</h1>
            <Filters />
            <ScheduleTable/>
        </div>
    )
}

export default Schedule
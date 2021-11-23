import {ScheduleTable} from "../components/schedule/ScheduleTiles"; 
import CarGroupFilter from "../components/schedule/CarGroupFilter";

function Schedule (props) {
    return (
        <div style={{marginLeft:"64px"}}>

            <h1>Schedule go BRRRRR~</h1>
            <CarGroupFilter/>
            <ScheduleTable/>
        </div>
    )
}

export default Schedule
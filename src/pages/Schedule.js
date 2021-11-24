import {ScheduleTable} from "../components/schedule/ScheduleTiles"; 
import CarGroupFilter from "../components/schedule/CarGroupFilter";
import TimeFilter from "../components/schedule/TimeFilter";

function Schedule (props) {
    return (
        <div style={{marginLeft:"64px"}}>

            <h1>Schedule go BRRRRR~</h1>
            <CarGroupFilter/>
            <TimeFilter/>
            <ScheduleTable/>
        </div>
    )
}

export default Schedule
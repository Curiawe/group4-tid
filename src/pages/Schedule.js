import {ScheduleTable} from "../components/schedule/ScheduleTiles"; 

function Schedule (props) {
    return (
        <div style={{marginLeft:"64px"}}>
            <h1>Schedule go BRRRRR~</h1>
            <table>
                <ScheduleTable/>
            </table>
        </div>
    )
}

export default Schedule
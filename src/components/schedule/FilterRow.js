import './schedule.css'
import { SelectCarGroup } from '../inputfields+dropdowns/dropDowns'
import TimeFilter from './TimeFilter'
import LocationFilter from './LocationFilter'
import StatusFilter from './StatusFilter'

function Filters (props) {
    return (
        <form className="filterRow">
            <SelectCarGroup onChange={(input) => {""}} />
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
            <LocationFilter />
            <StatusFilter />
        </form>
    )
}

export default Filters
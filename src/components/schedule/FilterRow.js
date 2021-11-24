import './schedule.css'
import CarGroupFilter from './CarGroupFilter'
import TimeFilter from './TimeFilter'
import LocationFilter from './LocationFilter'
import StatusFilter from './StatusFilter'

function Filters (props) {

    return (
        <form className="filterRow">
            <CarGroupFilter/>
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
            <LocationFilter />
            <StatusFilter />
        </form>
    )
}

export default Filters
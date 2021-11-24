import './schedule.css'
import CarGroupFilter from './CarGroupFilter'
import TimeFilter from './TimeFilter'
import LocationFilter from './LocationFilter'

function Filters (props) {

    return (
        <form className="filterRow">
            <CarGroupFilter/>
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
            <LocationFilter />
        </form>
    )
}

export default Filters
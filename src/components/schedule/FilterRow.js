import './schedule.css'
import CarGroupFilter from './CarGroupFilter'
import TimeFilter from './TimeFilter'
import LocationFilter from './LocationFilter'

function Filters (props) {

    return (
        <div className="filterRow">
            <CarGroupFilter/>
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
            <LocationFilter />
        </div>
    )
}

export default Filters
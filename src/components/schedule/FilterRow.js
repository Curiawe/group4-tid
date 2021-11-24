import './schedule.css'
import CarGroupFilter from './CarGroupFilter'
import TimeFilter from './TimeFilter'

function Filters (props) {

    return (
        <div className="filterRow">
            <CarGroupFilter/>
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
        </div>
    )
}

export default Filters
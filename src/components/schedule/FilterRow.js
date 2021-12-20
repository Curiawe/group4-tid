import './schedule.css'
import { SelectCarGroup } from '../inputfields+dropdowns/dropDowns'
import TimeFilter from './TimeFilter'
import LocationFilter from './LocationFilter'
import StatusFilter from './StatusFilter'
import { useState } from 'react'

function Filters (props) {
    const [carGroup, ChangeCarGroup] = useState("");
    return (
        <form className="filterRow">
            <SelectCarGroup onChange={(input) => ChangeCarGroup(input)} />
            <TimeFilter title="Pickup Date"/>
            <TimeFilter title="Return Date"/>
            <LocationFilter />
            <StatusFilter />
        </form>
    )
}

export default Filters
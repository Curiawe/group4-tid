import './schedule.css';

import { CARGROUPS } from '../../data/carGroups';

const groups = [
    CARGROUPS[0].name,
    CARGROUPS[1].name,
    CARGROUPS[2].name,
    CARGROUPS[3].name,
    CARGROUPS[4].name,
    CARGROUPS[5].name,
    CARGROUPS[6].name,
    CARGROUPS[7].name,
    CARGROUPS[8].name  
]


function CarGroupFilter (props) {
    return (
    <div>
    <label>
    Car Group:
    </label>
    <div className="dropDown">
        <select>
            <option value="Select Car Groups">Select Car Groups</option>
            <option value={groups[0]}>{groups[0]}</option>
            <option value={groups[1]}>{groups[1]}</option>
            <option value={groups[2]}>{groups[2]}</option>
            <option value={groups[3]}>{groups[3]}</option>
            <option value={groups[4]}>{groups[4]}</option>
            <option value={groups[5]}>{groups[5]}</option>
            <option value={groups[6]}>{groups[6]}</option>
            <option value={groups[7]}>{groups[7]}</option>
            <option value={groups[8]}>{groups[8]}</option>
        </select>
        </div>
    </div>
    )
}

export default CarGroupFilter
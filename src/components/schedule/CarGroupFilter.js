import './schedule.css';

import { CARGROUPS } from '../../data/carGroups';

const groups = [
    CARGROUPS.A[0],
    CARGROUPS.B[0],
    CARGROUPS.C[0],
    CARGROUPS.D[0],
    CARGROUPS.E[0],
    CARGROUPS.F[0],
    CARGROUPS.G[0],
    CARGROUPS.H[0],
    CARGROUPS.I[0]  
]

// this doesn't work yet
function makeOption(props) {

    return(
        <option key={props.group} value={props.group}>{props.group}</option>
    )
}

// This doesn't work yet
function createOptions(props) {
    let returnArray = []
    let array = props.array
    const length = array.length
    for (var i = 0; i<{length}; i++ ) {
        returnArray.push(<makeOption group={array[i]}/>)
    }

    return (
        <select>
            returnArray
        </select>
        )
}

function CarGroupFilter (props) {
    return (
    <form>
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
    </form>
    )
}

export default CarGroupFilter
import './schedule.css'

import { LOCATIONS } from '../../data/locations'

const locations = [
    LOCATIONS.AHA,
    LOCATIONS.AHC,
    LOCATIONS.AHN,
    LOCATIONS.AHS,
    LOCATIONS.CPA,
    LOCATIONS.CPC,
    LOCATIONS.FYN,
    LOCATIONS.FYS,
]

function LocationFilter () {
    return (
    <form>
    <label>
    Location:
    </label>
    <div className="dropDown">
        <select>
            <option value="Select Car Location">Select Car Location</option>
            <option value={locations[0][0]}>{locations[0][0]}</option>
            <option value={locations[1][0]}>{locations[1][0]}</option>
            <option value={locations[2][0]}>{locations[2][0]}</option>
            <option value={locations[3][0]}>{locations[3][0]}</option>
            <option value={locations[4][0]}>{locations[4][0]}</option>
            <option value={locations[5][0]}>{locations[5][0]}</option>
            <option value={locations[6][0]}>{locations[6][0]}</option>
            <option value={locations[7][0]}>{locations[7][0]}</option>
        </select>
        </div>
    </form>
    )
}

export default LocationFilter
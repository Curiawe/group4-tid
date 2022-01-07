import './schedule.css'

import { LOCATIONS } from '../../data/locations'

const locations = LOCATIONS

function LocationFilter () {
    return (
    <div>
    <label>
    Location:
    </label>
    <div className="dropDown">
        <select>
            <option value="Select Car Location">Select Car Location</option>
            <option value={locations[0].Location}>{locations[0].Location}</option>
            <option value={locations[1].Location}>{locations[1].Location}</option>
            <option value={locations[2].Location}>{locations[2].Location}</option>
            <option value={locations[3].Location}>{locations[3].Location}</option>
            <option value={locations[4].Location}>{locations[4].Location}</option>
            <option value={locations[5].Location}>{locations[5].Location}</option>
            <option value={locations[6].Location}>{locations[6].Location}</option>
            <option value={locations[7].Location}>{locations[7].Location}</option>
        </select>
        </div>
    </div>
    )
}

export default LocationFilter
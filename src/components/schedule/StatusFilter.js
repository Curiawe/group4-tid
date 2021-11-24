import './schedule.css'
/**
 * Building this as individual components did not work, fix if you are on a refactoring bender :D.
 * @returns checkboxes for each possible car Status
 */
function StatusFilter () {

    return (
        <div className="StatusCheckbox">
        <label>Show only cars that are...</label>
        <div>
            <input type="checkbox" id="Ready" name="Ready" value="Ready"/>
            <label style={{fontSize:"16px", fontWeight:"normal"}}>Ready</label>
        </div>
        <div>
            <input type="checkbox" id="Rented" name="Rented" value="Rented"/>
            <label style={{fontSize:"16px", fontWeight:"normal"}}>Rented</label>
        </div>
        <div>
            <input type="checkbox" id="Returned" name="Returned" value="Returned"/>
            <label style={{fontSize:"16px", fontWeight:"normal"}}>Returned</label>
        </div>
        <div>
            <input type="checkbox" id="Transfer" name="Transfer" value="Transfer"/>
            <label style={{fontSize:"16px", fontWeight:"normal"}}>Transfer</label>
        </div>
        <div>
            <input type="checkbox" id="Unavailable" name="Unavailable" value="Unavailable"/>
            <label style={{fontSize:"16px", fontWeight:"normal"}}>Unavailable</label>
        </div>
        </div>
    )
}

export default StatusFilter
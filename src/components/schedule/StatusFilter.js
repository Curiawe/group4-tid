import './schedule.css'

function StatusFilter () {

    return (
        <form>
        <label>Show only cars that are...</label>
        <div>
            <input type="checkbox" id="Ready" name="Ready" value="Ready"/>
            <label for="Ready" style={{fontSize:"16px", fontWeight:"normal"}}>Ready</label>
        </div>
        <div>
            <input type="checkbox" id="Rented" name="Rented" value="Rented"/>
            <label for="Rented" style={{fontSize:"16px", fontWeight:"normal"}}>Rented</label>
        </div>
        <div>
            <input type="checkbox" id="Returned" name="Returned" value="Returned"/>
            <label for="Returned" style={{fontSize:"16px", fontWeight:"normal"}}>Returned</label>
        </div>
        <div>
            <input type="checkbox" id="Transfer" name="Transfer" value="Transfer"/>
            <label for="Transfer" style={{fontSize:"16px", fontWeight:"normal"}}>Transfer</label>
        </div>
        <div>
            <input type="checkbox" id="Unavailable" name="Unavailable" value="Unavailable"/>
            <label for="Unavailable" style={{fontSize:"16px", fontWeight:"normal"}}>Unavailable</label>
        </div>
        </form>
    )
}

export default StatusFilter
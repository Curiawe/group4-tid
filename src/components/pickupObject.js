
function PickupObject (date, time, location) {
    console.log(date, time, location)
    let datetime = date
    let hours = 0
    let minutes = 0
    let timesplit = time.toString().split(":") 
    hours = parseInt(timesplit[0])
    minutes = parseInt(timesplit[1])
    datetime = new Date(datetime).setHours(hours)
    datetime = new Date(datetime).setMinutes(minutes)
    
    const Pickup = {
        time: datetime, location: location
    }

    return (
        Pickup
    )
}

export default PickupObject
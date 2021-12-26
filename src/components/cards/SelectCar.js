import { CARS } from "../../data/cars";
import { BOOKINGS } from "../../data/bookings";
import { Filter, X } from "react-feather";
import { TRANSFERS } from "../../data/transfer";
import { CARGROUPS } from "../../data/carGroups";
// group, availability


// find all cars with location and available status
function FilterCar(location, status) {
    return (
    CARS.filter(car =>  car.Location.Location === location && car.Status === status).map(filteredCar => (
        filteredCar
    )))
}

function FilterTransferCars(cars, pickupTime, returnTime) {
    
    let avCars = cars
    let transferCars = []

    TRANSFERS.map(t => {if (pickupTime <= t.Date && returnTime >= t.Date){
        transferCars.push(t.Car)
        return null
    }})

    let finalCars = avCars.filter(c => !transferCars.includes(c))
    let licenses = []
    finalCars.map(c => licenses.push(c.License))

    return(
        licenses
    )
}




function ShowAvailableCars(bookingRef) {

    let booking = BOOKINGS[0];

    BOOKINGS.map((bkng) => {
        if (bkng.Ref === bookingRef) {
        booking = bkng;
        }
        return null;
        });

    let pickupLocation = booking.Pickup.location.Location
    let carGroup = booking.carGroup
    let carStatus = "Available"

    let filteredCars = FilterCar(pickupLocation, carStatus)
    let cars = FilterTransferCars(filteredCars, booking.Pickup.time, booking.Return.time)

    return (cars)
} 

export default ShowAvailableCars 
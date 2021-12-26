import { CARS } from "../../data/cars";
import { BOOKINGS } from "../../data/bookings";
import { TRANSFERS } from "../../data/transfer";

// find all cars with location and available status
function FilterCar(location, status) {
    return (
    CARS.filter(car =>  car.Location.Location === location && car.Status === status).map(filteredCar => (
        filteredCar
    )))
}

// find all available cars that are not being transfered during the booking period
function FilterTransferCars(cars, pickupTime, returnTime) {
    
    let avCars = cars
    let transferCars = []

    TRANSFERS.map(t => {if (pickupTime <= t.Date && returnTime >= t.Date){
        transferCars.push(t.Car)
        return null
    }})

    let finalCars = avCars.filter(c => !transferCars.includes(c))
    
    return(
        finalCars
    )
}

// identify the requested car group

function FilterGroups(group) {
    return(
        CARS.filter(car => car.carGroup === group).map(c => (
            c))
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

    // assign location, group, status for booking
    let pickupLocation = booking.Pickup.location.Location
    let carGroup = booking.carGroup
    let carStatus = "Available"

    // filter cars based on location, status, availability during booking (= no transfers)
    let filteredCars = FilterCar(pickupLocation, carStatus)
    let cars = FilterTransferCars(filteredCars, booking.Pickup.time, booking.Return.time)
    
    // filter car groups - identify the requested group for booking
    let avCarGroups = FilterGroups(carGroup)
    let finalAvCars = cars.filter(c => avCarGroups.includes(c))

    // return license - change later maybe
    let allAvLicenses = []
    cars.map(c => allAvLicenses.push(c.License))

    let finalLicenses = []
    finalAvCars.map(c => finalLicenses.push(c.License))

    // return available car. If no car of requested group is available, show all available cars
    if (finalLicenses.length < 1) {
        return allAvLicenses
    }
    else return finalLicenses
} 

export default ShowAvailableCars 
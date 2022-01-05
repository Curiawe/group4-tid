import { BOOKINGS } from "../../data/bookings";
import { CARS } from "../../data/cars";
import ShowAvailableCars from "./SelectCar";

// find all cars reserved for walk-in
function FilterWalkinCar(location) {
    return (
    CARS.filter(car => car.Location.Location === location && car.resWalkin === true).map(filteredCar => (
        filteredCar
    )))
    }

// identify the requested car group
function FilterGroups(group) {
    return(
        CARS.filter(car => car.carGroup === group).map(c => (
            c))
    )
}

function ShowWalkinCars(bookingRef) {
    let booking = BOOKINGS[0];

    BOOKINGS.map((bkng) => {
        if (bkng.Ref === bookingRef) {
        booking = bkng;
        }
        return null;
        });

    let allWalkinCars = FilterWalkinCar(booking.Pickup.location.Location)
    let carGroup = booking.carGroup
    // filter car groups - identify the requested group for booking
    let avCarGroups = FilterGroups(carGroup) // available, right group
    let groupWalkinCars= allWalkinCars.filter(c => !avCarGroups.includes(c))
    
    //if (booking.isWalkin = true) {
    if (groupWalkinCars.length >= 1){
        return groupWalkinCars} 
    else if (groupWalkinCars.length < 1 && allWalkinCars.length >= 1) {
        return (allWalkinCars)}
    else { 
        return (ShowAvailableCars(bookingRef))}
}


export default ShowWalkinCars 
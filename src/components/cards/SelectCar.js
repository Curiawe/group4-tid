import { CARS } from "../../data/cars";
import { BOOKINGS } from "../../data/bookings";
import { Filter } from "react-feather";
import { TRANSFERS } from "../../data/transfer";
// group, availability

function FilterCar(location, status, group) {
    return (
    CARS.filter(car =>  car.Location.Location === location && car.Status === status && car.carGroup === group).map(filteredCar => (
        [filteredCar.License]
    )))
}

function FilterTransferCars(cars, pickupTime, returnTime) {
    let transfers = TRANSFERS[0];

    TRANSFERS.map((trans) => {
        if (trans.Car.License === cars) {
        transfers = trans;
        }
        return null;
        });
        
    if (transfers.Car.License.includes(cars)) {
    
        if (pickupTime < transfers.Date && returnTime > transfers.Date){
            return null
            } 
        else return transfers.Car.License
    }

    else return cars
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

    let filteredCars = FilterCar(pickupLocation, carStatus, carGroup).toString();

    let cars = FilterTransferCars(filteredCars, booking.Pickup.time, booking.Return.time)

    return (cars)
} 

export default ShowAvailableCars
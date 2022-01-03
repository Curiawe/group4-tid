import { TRANSFERS } from "../../data/transfer";

// find all cars in incoming location (request)
function FilterCarRequest(location) {
    return (
    TRANSFERS.filter(t =>  t.Incoming === location).map(filteredCar => (
        filteredCar.Car.License
    )))
}

// find all cars in outgoing location (release)
function FilterCarRelease(location) {
    return (
    TRANSFERS.filter(t =>  t.Outgoing === location).map(filteredCar => (
        filteredCar.Car.License
    )))
}

export { FilterCarRequest, FilterCarRelease} 

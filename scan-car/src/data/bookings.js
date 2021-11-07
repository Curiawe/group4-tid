import CARS from "./cars.js"
import CARGROUPS from "./carGroups.js"
import LOCATIONS from "./locations.js"
import CUSTOMERS from "./customers.js"
/**
 * Schema: ID: {Status,carGroup, CARS.license, Pickup {time, location}, Return {time, location}}, Returned {time, mileage}, price},
 */

let BOOKINGS = {

    1: {Status: "not begun",carGroup: CARGROUPS.A, Car: null, Pickup: {time: Date.UTC(2021,10,25,10), location: LOCATIONS.CPC}, Return: {time: Date.UTC(2021,11,26,10), location:LOCATIONS.CPC}, Services: {driver: true, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(1)},
    2: {Status: "not begun",carGroup: CARGROUPS.A, Car: CARS.FM23456, Pickup: {time: Date.UTC(2021,10,25,10), location: LOCATIONS.CPC}, Return: {time: Date.UTC(2021,11,25,10), location:LOCATIONS.CPA}, Services: {driver: false, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(2)}
}

function pricing(id){
    let bookingPrice = id
    //calculate the price here

    //update the actual returned price
    bookingPrice = 1000
    return bookingPrice
}
export default BOOKINGS
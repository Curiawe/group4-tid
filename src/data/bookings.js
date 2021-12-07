import {CARS} from "./cars.js"
import {CARGROUPS} from "./carGroups.js"
import {LOCATIONS} from "./locations.js"

/**
 * Schema: ID: {Status,isWalkin, carGroup, CARS.license, Pickup {time, location}, Return {time, location}}, Returned {time, mileage}, price},
 */

export const BOOKINGS = [
    {Status: "not begun",isWalkin: false,carGroup: CARGROUPS.A, Car: null, Pickup: {time: Date.UTC(2021,10,25,10), location: LOCATIONS.CPC}, Return: {time: Date.UTC(2021,11,26,10), location:LOCATIONS.CPC}, Services: {driver: true, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(1)},
    {Status: "not begun",isWalkin: true,carGroup: CARGROUPS.A, Car: CARS.FM23456, Pickup: {time: Date.UTC(2021,10,25,10), location: LOCATIONS.CPC}, Return: {time: Date.UTC(2021,11,25,10), location:LOCATIONS.CPA}, Services: {driver: false, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(2)}
]

function pricing(id){
    let bookingPrice = id
    //calculate the price here

    //update the actual returned price
    bookingPrice = 1000
    return bookingPrice
}
export default BOOKINGS
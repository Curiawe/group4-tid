import {CARS} from "./cars.js"
import {CARGROUPS} from "./carGroups.js"
import {LOCATIONS} from "./locations.js"
import { CUSTOMERS } from "./customers.js"
import { bookingStates } from "./bookingStates.js"

/**
 * Schema: ID: {Status,isWalkin, carGroup, CARS.license, Pickup {time, location}, Return {time, location}}, Returned {time, mileage}, price},
 */

export const BOOKINGS = [
    {Ref: "814", Status: bookingStates.PICKEDUP,isWalkin: false,carGroup: CARGROUPS[0], Customer: CUSTOMERS[0], Car: null, Pickup: {time: new Date(2021,11,8,10), location: LOCATIONS[0], mileage:0}, BillAs:null, Return: {time: new Date(2021,11,9,10), location:LOCATIONS[0], mileage: 0}, Services: {driver: true, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(1), Comment:""},
    {Ref: "815", Status: bookingStates.BOOKED,isWalkin: true, carGroup: CARGROUPS[0], Customer: CUSTOMERS[2], Car: CARS[7], Pickup: {time: new Date(2021,11,9,12), location: LOCATIONS[0], mileage:CARS[7].Mileage}, BillAs:CARGROUPS[4], Return: {time: new Date(2021,11,25,10), location:LOCATIONS[1], mileage: CARS[7].Mileage,}, Services: {driver: false, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(2), Comment:""},
    {Ref: "816", Status: bookingStates.RETURNED,isWalkin: false,carGroup: CARGROUPS[0], Customer: CUSTOMERS[1], Car: null, Pickup: {time: new Date(2021,11,8,10), location: LOCATIONS[0]}, mileage:0, BillAs:null,  Return: {time: new Date(2021,11,9,10), location:LOCATIONS[0], mileage: 0,}, Services: {driver: true, mileage:0}, Returned: {time:null, mileage:0}, price:pricing(1), Comment:""},
]

function pricing(id){
    let bookingPrice = id
    //calculate the price here

    //update the actual returned price
    bookingPrice = 1000
    return bookingPrice
}
export default BOOKINGS
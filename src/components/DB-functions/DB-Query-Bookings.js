import useState from 'react'
import Parse from 'parse'

/**
 * 
 * @param {Parse.Query} query 
 * @param {Function} setFunction 
 */
function QueryBooking(ref, setFunction) {

    const Bookings = Parse.Object.extend("Bookings");
    const query = new Parse.Query(Bookings);
    query.find().then((bookings) => {
        console.log(bookings);
        const myBooking=(bookings[0]);
        console.log(myBooking.get("ref"));
        console.log(myBooking.get("Customer"));
        setFunction(myBooking);    
    }
    )


}

function QueryBooking(setFunction) {

}


export default QueryBooking;
import Parse from "parse";

const queryBookings = {
    bookingFromRef : async (ref, funct) => { // this async function takes the variable 'ref'
        const Bookings = Parse.Object.extend("Bookings"); // we first create a class reference for our desired table(s)
        const query = new Parse.Query(Bookings); // we then initialize a query object for our desired table
        query.contains("ref", ref) // we set the constraints for our query afterwards

        let result = [] // this is for error handling, ensuring that we return an array, even if it is empty
        try {
            result = await query.find().then((booking) => funct(booking));
        } catch (error) {
            alert("Couldn't find what you were looking for. Error: " + error.message)
        } finally {
            return result
        }
         
    }
}

export default queryBookings
import Parse from "parse";


/**
 * Async Parse query function that retuns a promise, 
 * possibly containing a booking Object
 * 
 * @param {String} bookingRef 
 * @returns Promise
 */
async function bookingFromRef (ref) { // this needs to be async if we want to use await query.find()

        const Bookings = Parse.Object.extend("Bookings"); // we first create a class reference for our desired table(s)
        const query = new Parse.Query(Bookings); // we then initialize a query object for our desired table

       query.contains("ref", ref); // we set the constraints for our query afterwards
       query.select("ref") // what columns do we REALLY need?
      
        try { // we want to use try-catch for error handling. 
          const result = await query.find();
    
              for (let i = 0; i < result.length; i++) { // for each of the results
                  console.log(result[i].get("ref"))
              }
     // right now, this is a Promise. I might turn into an array.   
        } catch (error) {
          alert("Couldn't find what you were looking for. Error: " + error.message);
        }
      };

export default bookingFromRef

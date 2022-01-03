import { NavButtons } from "../components/buttons/navigationButtons";
import Pages from "./Pages";
import Parse from 'parse'

import queryBookings from "../components/DB-functions/DB-Query-Bookings";

function Home() {

  let teststring = ""
  

  const results = async () => {
    // this async function takes the variable 'ref'
    const Bookings = Parse.Object.extend("Bookings"); // we first create a class reference for our desired table(s)
    const query = new Parse.Query(Bookings); // we then initialize a query object for our desired table
    query.contains("ref", "815"); // we set the constraints for our query afterwards

    let result = []; // this is for error handling, ensuring that we return an array, even if it is empty
    try {
      result = await query.find().then((bookings) => teststring = bookings[0].get("ref"));
    } catch (error) {
      alert("Couldn't find what you were looking for. Error: " + error.message);
    } finally {
      return result;
    }
  };

  console.log(results)

  return (
    <>
    {teststring}
    <NavButtons
      linkButtonOne={Pages.BookingOverview}
      linkButtonTwo={Pages.Walkins}
      linkButtonThree={Pages.TransferOverview}
      textButtonOne="Add Booking"
      textButtonTwo="Estimate Walkins"
      textButtonThree="Transfers"
    />
    </>
  );
}

export default Home;

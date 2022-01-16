import { NavButtons } from "../components/buttons/navigationButtons";

import { useRef, useState } from "react";
import { useEffect } from "react";
import Parse from "parse";

import dbObject from "../components/dataHandling/DB-objects";

function Home() {
  const [refEffectTracker, setTracker] = useState("816");
  const workingBooking = useRef(null);

  // test: set tracker to "814"
  // if currentBooking is undefined or if the currentBooking.Ref does not match the active ref in the Tracker
  // make the db call
  // then create the Booking Effect from the db object
  // then set Tracker to currentBooking.Ref

  useEffect(() => {
    if (workingBooking.current === null || workingBooking.current.Ref !== refEffectTracker) {
      const Bookings = Parse.Object.extend("Bookings");
      const query = new Parse.Query(Bookings);
      query.include("customer");
      query.include("carGroup")
      query.find().then((bookings) => { // bookings is the result array
        const myBooking = bookings.find( // we are saving the object we need in a variable
          (b) => b.get("ref") === refEffectTracker
        );

       /*  var carGroup = myBooking.get("carGroup")
        const CarGroup = Parse.Object.extend("CarGroups");
        const carQuery = new Parse.Query(CarGroup);
        console.log("Car Group_ " + carQuery.find(carGroup)); */
        workingBooking.current = dbObject.fullBooking( // then call the object function
          myBooking.get("id"), // get the values you need by using the get()-method
          myBooking.get("ref"),
          myBooking.get("status"),
          myBooking.get("isWalkin"),
          myBooking.get("carGroup"),
          myBooking.get("customer.name"),
          myBooking.get("car"),
          myBooking.get("pickup"),
          myBooking.get("return.time"),
          myBooking.get("return.location"),
          myBooking.get("return.fuel"),
          myBooking.get("return.mileage"),
          myBooking.get("return.comment"),
          myBooking.get("billAs"),
          myBooking.get("returned.time"),
          myBooking.get("returned.mileage"),
          myBooking.get("services.driver"),
          myBooking.get("services.mileage"),
          myBooking.get("price")
        );
        console.log("Working bkng: "+ workingBooking.current.Ref);
        console.log("Working bkng pickup Comment " + workingBooking.current.Pickup.comment);
        console.log("Working bkng pickup time " + workingBooking.current.Pickup.time);
        setTracker(workingBooking.current.Ref);
        console.log("Ref Tracker: " + refEffectTracker);
        console.log("Customer Ref " + workingBooking.current.Customer);
      });
    }
  });

  if (workingBooking.current === null) {
    return <p>Loading</p>;
  }

  return (
    <>
  <NavButtons />
  </>);
}

export default Home;

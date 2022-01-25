import { NavButtons } from "../components/buttons/navigationButtons";

import { useRef } from "react";
import { useEffect } from "react";
import Parse from "parse";

import dbObject from "../components/dataHandling/DB-objects";

function Home() {
  const refEffectTracker = useRef("816");
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
      query.include("carGroup");
      query.find().then((bookings) => { // bookings is the result array
        const myBooking = bookings.find( // we are saving the object we need in a variable
          (b) => b.get("ref") === refEffectTracker.current
        );
        workingBooking.current = dbObject.fullBooking( // then call the object function
          myBooking.get("id"), // get the values you need by using the get()-method
          myBooking.get("ref"),
          myBooking.get("status"),
          myBooking.get("isWalkin"),
          myBooking.get("carGroup"),
          myBooking.get("customer"),
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
        refEffectTracker.current = workingBooking.current.Ref;
        console.log("Ref Tracker: " + refEffectTracker.current);
        console.log("customer: "+ workingBooking.current.Customer)
      });
    }
  });

  if (workingBooking === null) {
    return <p>Loading</p>;
  }

  return (
    <>
  <NavButtons />
  </>);
}

export default Home;

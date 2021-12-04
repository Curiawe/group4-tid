import { useState } from 'react';
import Parse from "parse";

// Get a time and put in the right spot in the booking object

const booking () = {

}


const booking = new Parse.Booking();
const [pickupDate, setPickupDate] = useState();
const [pickupTime, setPickupTime] = useState();

function handleSubmit (e) {

    e.preventDefault();
    console.log("prevented default");

    console.log("Pickup Date: " + pickupDate);
    console.log("Pickup Time: " + pickupTime);

    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then((loggedInUser) => {
        console.log(loggedInUser);
        navigate("/exercises");
    });
}
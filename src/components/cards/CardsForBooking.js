import "./cards.css";
import { IconBody } from "./IconBody";
import "../booking.css";
import { BOOKINGS } from "../../data/bookings";
import { COLORS } from "../../values/colors";
import { useEffect, useState } from "react";
/* Schema:
000: {Name:"Per Son", Ref, Phone, PickupPlace, PickupTime, ReturnPlace, ReturnTime, CarGroup, ExtraService}
 */

function BookingCard(props) {

  const [active, setActive] = useState(false);

  let bgColor = () => {
    if (active) {
      return (COLORS.Gray200);
    } else {
      return (COLORS.Gray100)
    }
  }

  useEffect(
    () => {
      console.log("useEffect called:")
      if (active) {
        bgColor = COLORS.Gray200
        console.log("current bgColor is " + bgColor)
      } else {
        bgColor = COLORS.Gray100
      }
      console.log("current bgColor is " + bgColor)
    }
  )

  let booking = BOOKINGS[0];

  BOOKINGS.map((bkng) => {
    if (bkng.Ref === props.booking) {
      booking = bkng;
    }
    return null;
  });

  let pickupTime = booking.Pickup.time
    .toLocaleTimeString("da-DA")
    .replace("00:00", "00");
  const pickupDate = new Date(booking.Pickup.time).toLocaleDateString("da-DA");
  pickupTime = pickupDate + ", " + pickupTime;

  let returnTime = new Date(booking.Return.time)
    .toLocaleTimeString("da-DA")
    .replace("00:00", "00");
  const returnDate = new Date(booking.Return.time).toLocaleDateString("da-DA");
  returnTime = returnDate + ", " + returnTime;

  let services;
  let serviceComp;

  if (booking.Services.driver) {
    services = "1 Extra Driver";
  } else if (booking.Services.mileage) {
    services = "Extra Mileage: " + booking.Services.mileage;
  }

  if (services) {
    serviceComp = (
      <>
        <div className="p2Booking">Extra Services</div>
        <IconBody title={services} icon="user" />
      </>
    );
  } else {
    serviceComp = (
      <>
        <div className="p2Booking" style={{ marginBottom: "16px" }}></div>
        <IconBody title="" icon="" />
      </>
    );
  }

  function handleClick(e) {
    console.log("handling click now!")
    setActive(!active);
    console.log("We are now " + active)
    props.onClick(e, booking.Ref)
    console.log("callback finished.")
  }


  return (
    <div className="card" style={{backgroundColor:bgColor}}>
      <div className="cardBodyBooking" onClick={(e) => handleClick(e)} >
        <div className="h4Booking"> BOOKING {booking.Ref} </div>
        <div className="p1Booking"> {booking.Customer.name}</div>
        <div className="p1Booking"> {booking.Customer.phone} </div>
        <div className="p2Booking">Pickup</div>
        <IconBody title={booking.Pickup.location.Location} icon="map-pin" />
        <IconBody title={pickupTime} icon="calendar" />
        <div className="p2Booking">Return</div>
        <IconBody title={booking.Return.location.Location} icon="map-pin" />
        <IconBody title={returnTime} icon="calendar" />
        <div className="p1Booking">{booking.carGroup[0]}</div>
        {serviceComp}
      </div>
    </div>
  );
}

export default BookingCard ;

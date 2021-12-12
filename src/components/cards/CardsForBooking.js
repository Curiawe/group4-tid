import "./cards.css";
import { IconBody } from "./IconBody";
import "../booking.css";
import { BOOKINGS } from "../../data/bookings";

/* Schema:
000: {Name:"Per Son", Ref, Phone, PickupPlace, PickupTime, ReturnPlace, ReturnTime, CarGroup, ExtraService}
 */

// https://www.geeksforgeeks.org/how-to-delete-specific-cache-data-in-reactjs/ 
// https://www.geeksforgeeks.org/how-to-store-single-cache-data-in-reactjs/

function BookingCard(props) {

  let booking = BOOKINGS[0];

  BOOKINGS.map((bkng) => {
    if (bkng.Ref === props.booking) {
      booking = bkng;
    }
    return null;
  });

  let item = new Date(booking.Pickup.time);
  let pickupTime = new Date(item)
    .toLocaleTimeString("da-DA")
    .replace("00.00", "00");
  const pickupDate = new Date(item).toLocaleDateString("da-DA");
  pickupTime = pickupDate + ", " + pickupTime;

  let secitem = booking.Return.time;
  let returnTime = new Date(secitem)
    .toLocaleTimeString("da-DA")
    .replace("00.00", "00");
  const returnDate = new Date(secitem).toLocaleDateString("da-DA");
  returnTime = returnDate + ", " + returnTime;

  let services;
  let serviceComp;

  if (booking.Services.driver) {
    services = "1 Extra Driver";
  } else if (booking.Services.driver) {
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

  let bookingReference = booking.Ref

  return (
    <div className="card" onClick={() => props.onClick(bookingReference)}>
      <div className="cardBodyBooking">
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

export default BookingCard;

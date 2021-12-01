import './cards.css';
import ButtonStyled from '../buttons/ColorButton';
import { IconBody } from './IconBody';
import Pages from '../../pages/Pages';
import { Icon } from '@iconify/react';

/* Schema:
000: {Name:"Per Son", Ref, Phone, PickupPlace, PickupTime, ReturnPlace, ReturnTime, CarGroup, ExtraService}
 */

export let BOOKING = {
    REF814: {Name: "Carl Bruun", Ref: "814", Phone: "+45 2222-2200", PickupPlace: "City Center", PickupTime: "12/11/2021, 12:30 PM", 
    ReturnPlace: "City Center", ReturnTime: "15/11/2021, 6:00 PM", CarGroup: "Car Group C", ExtraService: "40 km extra mileage"},
    REF815: {Name: "Alice Robertson", Ref: "815", Phone: "+45 8000-0008", PickupPlace: "City Center", PickupTime: "12/11/2021, 8:30 AM", 
    ReturnPlace: "Copenhagen Airport", ReturnTime: "20/11/2021, 7:30 PM", CarGroup: "Car Group B", ExtraService: "1 Extra driver"}
}

function BookingCard(props) {
    let booking = ""

    switch (props.booking) {

        case "814":
            booking = BOOKING.REF814;
            break;
        
        case "815":
            booking = BOOKING.REF815;
            break;
    }

    return (

    <div className="card">
        <div className="cardBodyBooking">
            <div className="h4Booking"> BOOKING {booking.Ref} </div>
            <div className="p1Booking"> {booking.Name}</div>
            <div className="p1Booking"> {booking.Phone} </div>
            <div className="p2Booking">Pickup</div>
            <IconBody title={booking.PickupPlace} icon="map-pin" />
            <IconBody title={booking.PickupTime} icon="calendar" />
            <div className="p2Booking">Return</div>
            <IconBody title={booking.ReturnPlace} icon="map-pin" />
            <IconBody title={booking.ReturnTime} icon="calendar" />
            <div className="p1Booking">{booking.CarGroup}</div>
            <div className="p2Booking">Extra Services</div>
            <IconBody title={booking.ExtraService} icon="user" />
        </div>
    </div>
    
    )
}

export default BookingCard
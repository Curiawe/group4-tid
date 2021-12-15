import './cards.css';
import BookingCard from './CardsForBooking';
import '../booking.css';
import {InputField} from '../inputField';
import {ButtonStyled} from '../buttons/ColorButton';
import Pages from '../../pages/Pages';
import BOOKINGS from '../../data/bookings';
import useLocalStorage from "../localStorage-actions/localStorage-add";



function BookingOverviewCont () {
    const [currentBooking, setCurrentBooking] = useLocalStorage("bookingRef", "")
    const cards = []

    BOOKINGS.map((bkng) => {
        cards.push(<div key={bkng.Ref} className="cardMargin">
        <BookingCard booking={bkng.Ref} onClick={(newRef) => setCurrentBooking(newRef)}/>
        </div>)
        return null
    })

    return (
    <div style={{marginLeft:"32px"}} >
        <div className="header">
                <div className="title">
                    <h1>Booking Overview</h1>
                </div>
        </div>
        <div className="searchBarMargin">
                <InputField className="inputField" placeHolder="Search for Booking"/>
                <ButtonStyled link = {Pages.BookingOverview} color="DarkBlueBtn" primary="true" className="buttonLarge" title="Search"/>
        </div>
        <div className="bookingCardMargin" >
            {cards}
        </div>
        <div className="bookingOvBtn1">
            <ButtonStyled link = {Pages.Pickup} color="PurpleBtn" primary="true" className="buttonLarge" title="Pick-up"/>
            <ButtonStyled link = {Pages.BookingLandingPage} color="DarkBlueBtn" primary="true" className="buttonLarge" title="Return"/>
        </div>
        <div className="bookingOvBtn2">
            <ButtonStyled link = {Pages.Schedule} color="DarkBlueBtn" primary="true" className="buttonLarge" title="Schedule"/>
        </div>      
    </div>
    )
}


export default BookingOverviewCont
import './cards.css';
import BookingCard from './CardsForBooking';
import '../booking.css';
import {InputField} from '../inputField';
import ButtonStyled from '../buttons/ColorButton';
import Pages from '../../pages/Pages';

function BookingOverviewCont () {
    return (
    <>
        <div className="searchBarMargin">
            <div className="searchBox">
                <InputField className="inputField" placeHolder="Search for Booking"/>
            </div>
                <ButtonStyled link = {Pages.BookingOverview} color="LightBlueBtn" primary="true" className="buttonLarge" title="Search"/>
        </div>
        <div className="bookingCardMargin">
            <div className="cardMargin">
                <BookingCard booking="814"/>
            </div>
            <div className="cardMargin">
                <BookingCard booking="815"/>
            </div>
        </div>
        <div className="bookingOvBtn1">
            <ButtonStyled link = {Pages.Pickup} color="PurpleBtn" primary="true" className="buttonLarge" title="Pick-up"/>
            <ButtonStyled link = {Pages.BookingLandingPage} color="LightBlueBtn" primary="true" className="buttonLarge" title="Return"/>
        </div>
        <div className="bookingOvBtn2">
            <ButtonStyled link = {Pages.Schedule} color="LightBlueBtn" primary="true" className="buttonLarge" title="Schedule"/>
        </div>
    </>
    )
}

export default BookingOverviewCont
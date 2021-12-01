import '../components/cards/cards.css';
import BookingCard from "../components/cards/CardsForBooking";

function BookingSearch () {
    return (
        <div className="cardPageMargin">
            <div className="cardMargin">
                <BookingCard booking="814"/>
            </div>
            <div className="cardMargin">
                <BookingCard booking="815"/>
            </div>
        </div>
    )
}

export default BookingSearch
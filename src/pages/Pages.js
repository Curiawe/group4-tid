/* **
 * -------How to use the Pages constant ----------
 * 
 * If you ever need to refer to a page link, use This component to prevent typos in your links.
 * 
 * 1) import Pages from '.pagesPages'
 * 
 * 2) instead of a "link", use {Pages.Link} instead.
 * Example: Instead of "bookings" use {Pages.BookingOverview}
 * 
 * See also App.js
 * 
 * */



const Pages = {
    BookingOverview: "booking-overview",
    BookingSearch: "booking-search",
    CarGroups: "car-groups",
    Cars: "cars",
    DailyOverview: "daily-overview",
    Home: "",
    Pickup: "pickup",
    RentalOffices: "offices",
    Return: "return",
    Schedule: "schedule",
    TransferRequest: "transfer",
    Walkins: "walkins"
}

export default Pages